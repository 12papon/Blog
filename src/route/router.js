const express = require("express");
const { signup, login } = require("../controllers/Authcontroller");

const router = express.Router();

router.post("/signup", express.json(), signup);
router.post("/login", express.json(), login);

module.exports = router;
