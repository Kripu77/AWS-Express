const express = require("express");
const app = express();
const morgan = require("morgan");
const { connectDb } = require("./db/dbConnect");
const { homeRouter } = require("./router/home");

require("dotenv").config();
const uri = process.env.MONGO_URI;
const port = process.env.PORT_NUM;

//logger middleware
app.use(morgan("tiny"));

//home router middleware

app.use("/", homeRouter);

async function startServer(uri) {
  try {
    await connectDb(uri);
    app.listen(port, (err, res) => {
      if (err) throw err;
      console.log("Server running on port 8080");
    });
  } catch (err) {
    console.log(err);
  }
}

startServer(uri);
