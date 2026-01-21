const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // Simulate a broken update
res.send('ERROR 500: DATABASE CRASHED! The site is down!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
