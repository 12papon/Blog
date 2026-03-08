const Posts = require("../models/posts");
const postsHandaler = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const image = req.file.path;
    console.log(title, image, content);
    const newPost = new Posts({ image, title, content });
    await newPost.save();

    res.json({
      message: "ফাইল সফলভাবে আপলোড হয়েছে!",
      fileInfo: req.file,
      body: req.body,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = postsHandaler;
