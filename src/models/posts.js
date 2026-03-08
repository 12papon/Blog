const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema(
  {
    image: { type: String, required: true, unique: true },
    title: { type: String, required: true, unique: true },
    content: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);

const psots = mongoose.model("posts", postsSchema);

module.exports = psots;
