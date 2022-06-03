const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Routes
const authRoute = require('./routes/authRoute.js');
const userRoute = require('./routes/userRoute.js');

const app = express();

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
dotenv.config();

// Connect Mongo DB
mongoose
  .connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Server is running at ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error));

// Usage of routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/user', userRoute);