const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Day 18! I was deployed automatically by a robot.");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
