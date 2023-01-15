const express = require('express');
const userRouter = require('./routers/userRouter');
const utilRouter = require('./routers/util');
const equipmentRouter = require('./routers/equipmentRouter');
const stripe_sk =
  "sk_test_51MJCFESFzM9nsxSsqqlx3P1nYPbvhbzfnEWOhOlzxwONXSeWcCJ5V2cFJ1D4w0YLPhqu9UcSaCetp9Gv6rBOsE9x00Aenxvr5T";
const stripe = require("stripe")(stripe_sk);

const cors = require('cors');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors({
    origin : ['http://localhost:3000']
}))

// middleware
app.use('/user', userRouter);
app.use('/util', utilRouter);
app.use('/equipment', equipmentRouter);

app.use(express.static('./static/uploads'))

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
    console.log(' express server started...');

});