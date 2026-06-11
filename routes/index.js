const express = require("express");
const indexRouter = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.text,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect("/");
});

indexRouter.get("/details", (req, res) => {
  console.log(req.query);
  res.render("details", { index: req.query.index, messages: messages });
});

indexRouter.use((err, req, res, next) => {
  console.log(err);
});

module.exports = { indexRouter };
