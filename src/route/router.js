const express = require("express");
const { signup, login } = require("../controllers/Authcontroller");
const User = require("../models/auth");
const Product = require("../models/productSchema");
const upload = require("../controllers/Multer");
const postsHandaler = require("../controllers/postsHandaler");
const getAllPosts = require("../controllers/getAllPosts");
const path = require("path");

const router = express.Router();

//testing purpus

//main router
router.get("/posts", express.json(), getAllPosts);
router.post("/signup", express.json(), signup);
router.post("/login", express.json(), login);
router.post("/upload", upload.single("postImage"), postsHandaler);
console.log(path.basename("/users/docs/file.txt"));

module.exports = router;
