const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skillSchema = new Schema({
    name: { type: String, required: true },
    havers: [
        {
            type: Schema.Types.ObjectId,
            ref: "UserPassport",
        }
    ],
    seekers: [
        {
            type: Schema.Types.ObjectId,
            ref: "UserPassport",
        }
    ],
    date: { type: Date, default: Date.now },
});

const Skill = mongoose.model("Skill", skillSchema);

module.exports = Skill;