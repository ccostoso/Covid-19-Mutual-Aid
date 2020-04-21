const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
mongoose.promise = Promise
const community = require("./community");

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
  communities: [
    {
      type: Schema.Types.ObjectId,
      ref: "Community",
    }
  ],
  pending: [
    {
      type: Schema.Types.ObjectId,
      ref: "Community",
    }
  ],
  threads: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thread",
    }
  ],
  date: { type: Date, default: Date.now },
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

// Define hooks for pre-saving
userSchema.pre('save', function(next) {
  console.log("this is", this);
	if (!this.password) {
		console.log('=======NO PASSWORD PROVIDED=======')
		next()
	} else {
		this.password = this.generateHash(this.password)
		next()
	}
	// this.password = this.hashPassword(this.password)
	// next()
})

const User = mongoose.model("UserPassport", userSchema);

module.exports = User;