const express = require("express");
const { Alltodo } = require("../controller/todo");

const router = express.Router();

router.route("/").get(Alltodo);

module.exports = router;
