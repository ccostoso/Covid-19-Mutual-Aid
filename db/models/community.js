const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const communitySchema = new Schema({
  communityName: { type: String, required: true },
  description: { type: String, required: true },
  creator: { type: String, required: true },
  date: { type: Date, default: Date.now },
  memberCount: {
    type: Number,
    required: true,
    default: 1,
  },
  membership: {
    type: [String],
    required: true,
    default: [],
  },
  threads: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thread",
    }
  ],
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "UserPassport",
    }
  ]
});

const Community = mongoose.model("Community", communitySchema);

module.exports = Community;