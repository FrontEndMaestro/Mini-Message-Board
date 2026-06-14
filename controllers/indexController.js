const dbStorage = require("../db/queries");
const { body, validationResult, matchedData } = require("express-validator");

const validations = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("user name cannot be empty")
    .isAlpha()
    .withMessage("username cannot contain any numbers"),
  body("text").trim().notEmpty().withMessage("Message cannot be empty"),
];

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

async function getMessages(req, res) {
  let data = await dbStorage.getAllMessages();
  res.render("index", { title: "Mini Messageboard", messages: data });
}

const postAddUser = [
  validations,
  async (req, res) => {
    const  errors  = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("form", {
        errors: errors.array(),
      });
    } else {
      await dbStorage.createMessage(
        req.body.name,
        req.body.text,
        new Date().toISOString(),
      );
      res.redirect("/");
    }
  },
];

async function getMessageDetails(req, res) {
  let data = await dbStorage.getMessageDetails(req.query.id);
  console.log(data);
  res.render("details", { message: data });
}

module.exports = { getMessages, postAddUser, getMessageDetails };
