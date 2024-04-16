const express = require("express");
const { getPlainText } = require("../controllers");

const router = express.Router();

router.get("/", getPlainText);

module.exports = router;
