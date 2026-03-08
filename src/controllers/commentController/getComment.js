const Comment = require("../../models/comment");

const getComment = async (req, res) => {
  try {
    const { postId } = req.params;
    const comment = await Comment.find({ postId }).sort({ createdAt: -1 });
    res.status(200).json(comment);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching comments", error: err.message });
  }
};

module.exports = getComment;
