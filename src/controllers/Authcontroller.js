const User = require("../models/auth");

//PostUser
const signup = async (req, res, next) => {
  try {
    const data = req.body;
    const { username, email, password } = req.body;
    // ইউজার আগে থেকেই আছে কি না চেক করা
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res
        .status(400)
        .json({ message: "ইমেইলটি ইতিমধ্যে ব্যবহৃত হয়েছে!" });

    // নতুন ইউজার তৈরি ও সেভ
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({
      message: "অ্যাকাউন্ট তৈরি সফল হয়েছে!",
      user: { email, password },
    });
  } catch (error) {
    next(error.message);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // ১. ডাটাবেজে ইমেইল দিয়ে ইউজার খোঁজা
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "Did not match your email, or password!" });
    }
    // ৩. পাসওয়ার্ড চেক করা
    if (user.password !== password) {
      return res.status(401).json({ message: "Password wrong!" });
    }
    // ৪. সব ঠিক থাকলে ইউজারের তথ্য পাঠানো (পাসওয়ার্ড বাদে পাঠানোই ভালো)
    res.status(200).json({
      message: "Login success",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Login error", error);
    res.status(500).json({
      message: "Sarver problems",
    });
  }
};

module.exports = {
  signup,
  login,
};
