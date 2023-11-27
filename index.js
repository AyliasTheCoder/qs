const express = require("express");
const app = express();

var url = "";

app.use(express.static("./public"));

app.get("/s", (req, res) => {
  url = req.query.url;
  res.redirect("/");
});

app.get("/u", (req, res) => {
  res.end(url);
});

app.listen(80);
