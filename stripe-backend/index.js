const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const stripeLib = require("stripe");

dotenv.config();
const stripe = stripeLib(process.env.STRIPE_SECRET_KEY);
const app = express();

app.use(cors());
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  const { plan } = req.body;

  const priceMap = {
    Premium: process.env.STRIPE_PRICE_PREMIUM,
    Enterprise: process.env.STRIPE_PRICE_ENTERPRISE,
  };

  const priceId = priceMap[plan];
  if (!priceId) {
    return res.status(400).json({ error: "Invalid plan selected" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: "http://localhost:5500/success.html",
      cancel_url: "http://localhost:5500/cancel.html",
    });

    res.json({ id: session.id });
  } catch (err) {
    console.error("Stripe Error:", err);
    res.status(500).json({ error: "Stripe session failed" });
  }
});

const PORT = 4242;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
