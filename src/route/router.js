const express = require("express");
const routsUtils = require("../utils/routsUtils");

const router = express.Router();

router.get("/m1", routsUtils.getData);

module.exports = router;
