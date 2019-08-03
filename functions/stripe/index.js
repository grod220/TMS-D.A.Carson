const functions = require("firebase-functions");
const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const stripe = require("stripe")("sk_test_aHRehjwK9Qu8Iy9wtWSZ1TbW");
const Utils = require("./utils");

const Sentry = require("@sentry/node");
Sentry.init({
  dsn: "https://37c553e6cb9c4d7b91443519ccd448a9@sentry.io/1514998"
});

app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/helloworld", (req, res) => {
  res.send("Hello from Stripe!");
});

app.post("/order", async (req, res) => {
  try {
    Utils.validateOrderOrThrow(req.body);

    const sessionObj = {
      payment_method_types: ["card"],
      line_items: Utils.formatCart(
        req.body.shoppingCart,
        req.body.tip,
        req.body.tax,
        req.body.deliveryFee
      ),
      success_url: "https://www.themeatballstoppe.com/order/success",
      cancel_url: "https://www.themeatballstoppe.com/order/cancelled",
      payment_intent_data: Utils.formatPaymentIntentObj(req.body)
    };

    const stripeSession = await stripe.checkout.sessions.create(sessionObj);
    res.json(stripeSession);
  } catch (e) {
    Sentry.captureException(e);
    res.status(500).json({ error: e.toString() });
  }
});

module.exports = functions.https.onRequest(app);
