const express = require("express");
const { Alltodo, updatetodo } = require("../controller/todo");

const router = express.Router();

router.route("/").get(Alltodo);
router.route("/update").put(updatetodo);
module.exports = router;
