const express = require("express");
const userRouter = require("./routers/userRouter");
const utilRouter = require("./routers/util");
const equipmentRouter = require("./routers/equipmentRouter");
const orderRouter = require("./routers/orderRouter");
const stripe_sk =
  "sk_test_51MLjhBSEMMAeLJi0Wk9cLkRCL3ZuccWlJ9GKOPFDtkZgUHqaZ3gjMqjJzeSjw0TTUAGo5gPAAg29ByiHQeOayFuO00r0UFPbfU";
const stripe = require("stripe")(stripe_sk);

const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

// middleware
app.use("/user", userRouter);
app.use("/util", utilRouter);
app.use("/equipment", equipmentRouter);
app.use("/order", orderRouter);

app.use(express.static("./static/uploads"));

app.post("/create-payment-intent", async (req, res) => {
  const data = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: data.amount,
    currency: "inr",
  });
  res.status(200).json(paymentIntent);
});

//starting the server
app.listen(port, () => {
  console.log(" express server started...");
});
