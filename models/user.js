const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  displayName: {
    type: String,
    required: [true, 'Must provide display name.'],
  },
  email: {
    type: String,
    required: [true, 'Must provide email address.'],
  },
  password: {
    type: String,
    required: [true, 'Must provide password.'],
  },
  skills: {
    type: [String],
    default: [],
  },
  needs: {
    type: [String],
    default: [],
  },
  date: { 
    type: Date, 
    default: Date.now 
  },
  settings: {
    languages: {
      type: String,
      default: "English",
    },
    fontSize: {
      type: Number,
      default: 50,
    },
    brightness: {
      type: Number,
      default: 50,
    }
  }
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;