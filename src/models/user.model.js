import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a name."],
    },
    email: {
      type: String,
      required: [true, "Please provide an email."],
      unique: [true, "Email already exists."],
    },
    password: {
      type: String,
      required: [true, "Please provide a password."],
    },
    avatar: {
      type: String,
      default: "",
    },
    accessToken: {
      type: String,
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // if the password is not modified, skip this
  this.password = await bcrypt.hash(this.password, 10); // hash the password
  next();
});
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password); // compare the password
};

userSchema.methods.generateAccessToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

userSchema.methods.generateRefreshToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema);
