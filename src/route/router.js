const express = require("express");
const { signup, login } = require("../controllers/Authcontroller");
const User = require("../models/auth");
const Product = require("../models/productSchema");
const upload = require("../controllers/Multer");
const postsHandaler = require("../controllers/postsHandaler");
const getAllPosts = require("../controllers/getAllPosts");
const getComment = require("../controllers/commentController/getComment");
const addComment = require("../controllers/commentController/addComment");
const getAllPostsId = require("../controllers/getAllPostsId");

const router = express.Router();

//testing purpus

//main router
router.get("/posts", express.json(), getAllPosts);
router.get("/posts/:id", express.json(), getAllPostsId);
router.get("/getcomment/:postId", express.json(), getComment);
router.post("/signup", express.json(), signup);
router.post("/login", express.json(), login);
router.post("/upload", upload.single("postImage"), postsHandaler);
router.post("/postcomment", express.json(), addComment);

module.exports = router;
