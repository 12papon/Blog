const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      require: true,
      trim: true,
      minlength: 3,
    },
    email: { type: String, unique: true, require: true, lowercase: true },
    password: { type: String, unique: true, minlength: 4 },
  },
  { timestamps: true },
);

//password hasing
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

const User = mongoose.model("User", userSchema);

module.exports = User;
