const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const replySchema = new Schema({
  body: { type: String, required: true },
  author: { type: String, required: true },
  authorName: { type: String, required: true },
  date: { type: Date, default: Date.now },
  parentThread: {
    type: Schema.Types.ObjectId,
    ref: "Thread",
  },
});

const Reply = mongoose.model("Reply", replySchema);

module.exports = Reply;