# Stripe Payment Backend

## Overview

This backend service handles payment processing for an **Events Platform** that allows participants to purchase tickets for paid events using **Stripe**. The main function of this backend is to create payment intents using the Stripe API, enabling secure transactions with various payment methods.

The backend exposes an endpoint to create payment intents, which accepts the amount to be charged and returns a `client_secret` to be used on the frontend for payment authorization.

## Features

- **Payment Intent Creation**: Handles creating payment intents via Stripe for ticket purchases.
- **Currency**: All payments are processed in GBP.
- **Automatic Payment Methods**: The backend enables Stripe's automatic payment methods, allowing various supported payment types without additional setup.

## Prerequisites

To run this backend, ensure you have the following installed:

- **Node.js**: Version 12+
- **Stripe Account**: You will need a Stripe account to retrieve your secret key for the `.env` file.

## Installation

1. Clone the repository:

   ```bash
   git clone <https://github.com/KrisChe8/stripe_backend>
   ```

2. Navigate to the project directory:

```bash
  cd stripe_backend
```

3. Install dependencies:

```bash
npm install
```

4. Create a .env file in the project root and add your Stripe secret key:
   Example .env file:

```bash
SECRET_KEY=your-stripe-secret-key
```

## API Endpoints

POST /intents
Description: Creates a Stripe payment intent and returns the client_secret to the client.

Request:
Method: POST
Body:
amount (Integer): The amount to be charged in pence (for example, 500 for £5.00).
Response:
Success: Returns a JSON object containing the client_secret.
Error: Returns a JSON object with the error message.

## Usage

Start the server:

```bash
npm start
```

The backend will be running on http://localhost:3000.

To test the payment intent creation, make a POST request to /intents with a valid amount in the request body, you can run:

```bash
curl -H 'Content-Type: application/json' \
      -d '{ "amount”: 500}' \
      -X POST \
      http://localhost:3000/api/payments/intents
```

## Tech Stack

- Node.js: JavaScript runtime environment.
- Express.js: Web framework for Node.js.
- Stripe API: For handling payment processing.
