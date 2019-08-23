var express = require("express");
var router = express.Router();
var data = require("../data");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("welcome");
});

/* GET home page. */
router.get("/home", function(req, res, next) {
  res.render("my-web-app", data);
});

router.get("/settings", function(req, res, next) {
  res.render("index", { title: "Settings Page!" });
});

router.get("/home/contacts", function(req, res, next) {
  res.render("index", { title: "Contacts Page!" });
});

router.get("/messages", function(req, res, next) {
  let type = req.query.type;
  let gender = req.query.gender;
  let messages = data.messages;
  switch (type) {
    case "unread":
      messages = messages.filter(m => m.numbUnread > 0);
      break;
    case "read":
      messages = messages.filter(m => m.numbUnread === 0);
      break;
  }
  messages = gender ? messages.filter(m => m.gender === gender) : messages;
  res.json(messages);
});

module.exports = router;
