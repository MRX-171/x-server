const express = require("express");
const router = express.Router();
const path = require("path");

const { TEMPLATES } = require("../configs");

router.get("/", (req, res) => {
  if (res.status(200)) {
    res.sendFile(`${TEMPLATES}/index.html`);
  } else if (500) {
    res.sendFile(`${TEMPLATES}/errors/500.html`);
  }
});

router.get("/app", (req, res) => {
  if (res.status(200)) {
    res.sendFile(`${TEMPLATES}/pages/app.html`);
  } else if (500) {
    res.sendFile(`${TEMPLATES}/errors/500.html`);
  }
});

module.exports = router;
