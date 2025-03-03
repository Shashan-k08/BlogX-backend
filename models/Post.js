const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  user: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const postSchema = new mongoose.Schema({
  user: { type: String, required: true },
  content: { type: String, required: true },
  likes: { type: Number, default: 0 },
  comments: [commentSchema],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", postSchema);
