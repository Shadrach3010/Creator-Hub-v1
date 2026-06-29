# Creator's Hub

A modern creator marketplace and subscription platform that helps creators showcase their work, connect with clients, and manage premium memberships through Stripe-powered checkout.

## Overview

Creator's Hub is a responsive web application built with static frontend pages and a lightweight Node.js backend for secure subscription payments. It provides:

- Creator profiles and project showcases
- Subscription plans for premium access
- Stripe Checkout integration for recurring billing
- A clean dashboard experience for creators and admins

## Key Features

- Responsive landing pages for visitors and creators
- Project and creator discovery pages
- Subscription checkout with premium and enterprise plans
- Stripe backend for creating checkout sessions
- Admin-facing dashboard structure for management workflows

## Tech Stack

| Layer | Technologies |
| --- | --- |
| Frontend | HTML, CSS, JavaScript |
| Backend | Node.js, Express |
| Payments | Stripe API |
| Environment Config | dotenv |

## Project Structure

- [index.html](index.html) — Main landing page
- [projects.html](projects.html) — Browse projects
- [creators.html](creators.html) — Browse creators
- [subscription.html](subscription.html) — Subscription plan selection page
- [success.html](success.html) — Payment success confirmation page
- [stripe-backend/index.js](stripe-backend/index.js) — Stripe checkout backend
- [stripe-backend/package.json](stripe-backend/package.json) — Backend dependencies and scripts

## Prerequisites

Before running the project locally, make sure you have:

- Node.js 18+ installed
- npm installed
- A Stripe account with test API keys
- A local static file server or VS Code Live Server extension

## Environment Setup

1. Navigate to the backend folder:

   ```bash
   cd stripe-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in [stripe-backend](stripe-backend) with your Stripe credentials:

   ```env
   STRIPE_SECRET_KEY=sk_test_your_secret_key_here
   STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
   STRIPE_PRICE_PREMIUM=price_your_premium_price_id
   STRIPE_PRICE_ENTERPRISE=price_your_enterprise_price_id
   ```

> Replace the placeholder values with your actual Stripe test keys and price IDs.

## Running the Application Locally

### 1. Start the Stripe backend

```bash
cd stripe-backend
node index.js
```

The backend will run on:

```text
http://localhost:4242
```

### 2. Serve the frontend files

From the project root, start a local static server:

```bash
python -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

## Subscription Flow

1. A user selects a plan from [subscription.html](subscription.html).
2. The frontend sends the selected plan to the backend endpoint:

   ```text
   POST /create-checkout-session
   ```

3. The backend creates a Stripe Checkout session using the configured price IDs.
4. The user completes payment on Stripe.
5. Stripe redirects the user to the configured success or cancel URL.

## Notes for Deployment

- Update the `success_url` and `cancel_url` values in [stripe-backend/index.js](stripe-backend/index.js) to point to your deployed frontend URLs.
- For production, use live Stripe keys instead of test keys.
- Ensure your Stripe product prices are active and mapped correctly in the environment variables.

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome. If you'd like to improve the project, please open an issue or submit a pull request.
