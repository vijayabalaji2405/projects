const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please fill the name fiels"],
  },
  email: {
    type: String,
    required: [true],
    unique: [true, , "Email id already exist"],
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid emails"],
  },
  password: {
    type: String,
    required: [true],
    select: false,
  },
  role: {
    type: String,
    default: "user",
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same!",
    },
  },
});

schema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

schema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", schema);

module.exports = User;
