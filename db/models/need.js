const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const needSchema = new Schema({
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

const Need = mongoose.model("Need", needSchema);

module.exports = Need;