const express = require("express");
const logincontroller = require("./../controller/logincontroller");

const router = express.Router();

router.post("/login", logincontroller.login);
router.post("/signup", logincontroller.signup);
module.exports = router;
