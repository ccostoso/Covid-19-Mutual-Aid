const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const threadSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  community: { type: String, required: true },
  author: { type: String, required: true },
  authorName: { type: String, required: true },
  date: { type: Date, default: Date.now },
  parentThread: {
    type: Schema.Types.ObjectId,
    ref: "Thread",
  },
  replies: [
    {
      type: Schema.Types.ObjectId,
      ref: "Reply",
    }
  ]
});

const Thread = mongoose.model("Thread", threadSchema);

module.exports = Thread;