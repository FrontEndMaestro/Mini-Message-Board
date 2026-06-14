const express = require("express");
const indexRouter = express.Router();
const indexController = require("../controllers/indexController");

indexRouter.get("/", indexController.getMessages);

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", indexController.postAddUser);

indexRouter.get("/details", indexController.getMessageDetails);

indexRouter.use((err, req, res, next) => {
  console.log("inside error");
  console.log(err);
});

module.exports = { indexRouter };
