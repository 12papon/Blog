const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema(
  {
    image: { type: String, required: true, unique: true },
    title: { type: String, required: true, unique: true },
    content: { type: String, required: true, unique: true },
    auth: {
      name: { type: String, required: true },
      email: { type: String, required: true },
    },
    comments: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
    },
  },
  { timestamps: true },
);

const psots = mongoose.model("posts", postsSchema);

module.exports = psots;
