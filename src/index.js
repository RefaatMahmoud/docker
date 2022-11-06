import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("<h1>Hello word</h1>");
});

app.listen(PORT, () => {
  console.log(`backend app started at ${PORT}`);
});
