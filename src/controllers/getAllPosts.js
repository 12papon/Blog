const Posts = require("../models/posts");
const getAllPosts = async (req, res) => {
  try {
    const data = await Posts.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({
      message: "Data not found",
      err: err.message,
    });
  }
};

module.exports = getAllPosts;
