const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51IyJrCGaf64MiDMPdHKusGvCmIATSfTKzyhwmISRDfCCfiCh7kDZrgo9C0nD1Kl6FtPkrlzG2JkUHxEbWbhWCUar00hQWLx4r5"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("total: ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    // ok - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint API
// http://localhost:5001/clone-4b1ca/us-central1/api
