const Comment = require("../../models/comment");
const Posts = require("../../models/posts");

const comment = async (req, res) => {
  try {
    const { content, postId, auth } = req.body;

    const newComment = new Comment({
      content,
      postId,
      auth,
    });
    const saveComment = await newComment.save();

    await Posts.findByIdAndUpdate(postId, {
      $push: { comments: saveComment._id },
    });
    res.status(201).json(saveComment);
  } catch (err) {
    res.status(404).json({
      message: "Comment not found",
      error: err.message,
    });
  }
};

module.exports = comment;
