const Posts = require("../models/posts");

const getAllPostsId = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Posts.find({ _id: id });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({
      message: "Post not found",
      error: err.message,
    });
  }
};

module.exports = getAllPostsId;
