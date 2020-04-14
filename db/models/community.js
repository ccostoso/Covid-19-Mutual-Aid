const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const communitySchema = new Schema({
  address: { type: String, required: true },
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
  },
  administrators: {
    type: Array, 
    required: true
  },
  moderators: {
    type: Array,
    required: false,
    default: undefined
  }
});

const Community = mongoose.model("Community", communitySchema);

module.exports = Community;