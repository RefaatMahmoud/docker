import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";

//* intial app
const app = express();
dotenv.config();

//* global vars from env
const { NODE_PORT, DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT } = process.env;

//* connect to mongodb
mongoose
  .connect(`mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`)
  .then(() => {
    console.log("connected to mongo db");
  })
  .catch((err) => {
    console.log(`error in db connection ${err}`);
  });

console.log("here");
//* requests
app.get("/", (req, res) => {
  res.send("<h1>Hello word</h1>");
});

app.listen(NODE_PORT, () => {
  console.log(`backend app started at ${NODE_PORT}`);
});
