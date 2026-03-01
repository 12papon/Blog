const express = require("express");
const Database = require("./src/configDB/configDB");
const cors = require("cors");
const router = require("./src/route/router");

const app = express();
//cors setup
const allowedOrigins = [
  "http://localhost:5173", // Vite এর ডিফল্ট পোর্ট
  "https://yourblogdomain.com", // আপনার প্রোডাকশন ডোমেইন
];
const corsOptions = {
  origin: (origin, callback) => {
    // মোবাইল অ্যাপ বা লোকাল রিকোয়েস্টের জন্য origin চেক (নিরাপত্তার জন্য)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(
        new Error("CORS নীতি অনুযায়ী এই সাইট থেকে রিকোয়েস্ট অনুমোদিত নয়!"),
      );
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], // প্রয়োজনীয় মেথডগুলো নির্দিষ্ট করা [৫]
  allowedHeaders: ["Content-Type", "Authorization"], // টোকেন পাঠানোর জন্য Authorization জরুরি
  credentials: true, // কুকি বা সেশন হ্যান্ডেল করার জন্য এটি true রাখা ভালো
  optionsSuccessStatus: 200, // পুরানো ব্রাউজারগুলোর সামঞ্জস্যের জন্য
};
// Database
Database();

//cors
app.use(cors(corsOptions));
//Routers
app.use("/blog", router);

//Error Handaling
app.use((err, req, res, next) => {
  if (err) {
    res.status(500).json({ message: "সার্ভার এরর!", err: err });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server listen to port ${process.env.PORT}`);
});
