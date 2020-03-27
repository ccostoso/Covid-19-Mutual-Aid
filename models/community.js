const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const communitySchema = new Schema({
  address: { type: String, required: true },
  creator: { type: String, required: true },
  date: { type: Date, default: Date.now },
  administrators: {
    type: Array, 
    required: false
  },
  moderators: {
    type: Array,
    required: true,
    default: undefined
  }
});

const Community = mongoose.model("Community", communitySchema);

module.exports = Community;