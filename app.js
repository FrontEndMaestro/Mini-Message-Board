const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log("Server Started! Listening on http://localhost:3000");
});
