require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");
const contactRoute = require("./router/contact-router");

// Handling Cors
var corsOptions = {
  origin: 'http://localhost:3000', // Remove the trailing slash
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

// Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

// console.log(`This msg from env ${process.env.CHEAK_ENV}`)

app.use(errorMiddleware);

const PORT = 6600;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});
