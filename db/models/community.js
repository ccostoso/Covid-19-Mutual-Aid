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
  pending: [
    {
      type: Schema.Types.ObjectId,
      ref: "UserPassport",
    }
  ],
  threads: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thread",
    }
  ],
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "UserPassport",
    }
  ],
  admins: [
    {
      type: Schema.Types.ObjectId,
      ref: "UserPassport",
    }
  ]
});

const Community = mongoose.model("Community", communitySchema);

module.exports = Community;