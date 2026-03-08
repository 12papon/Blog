const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    id: { type: String, unique: true, required: true }, //customid
    product: { type: String, required: true },
    category: { type: String, index: true }, // ক্যাটাগরি দিয়ে ফিল্টার করার জন্য ইন্ডেক্স
    price: { type: Number, default: 0 },
    like: { type: Number, default: 0 },
    order: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    autoIndex: true, // শেখার সময় এটি true রাখুন যাতে মঙ্গুস অটো ইন্ডেক্স তৈরি করে
  },
);

// কম্পাউন্ড ইন্ডেক্স: যখন কেউ একইসাথে ক্যাটাগরি এবং কম দামের প্রোডাক্ট খুঁজবে
productSchema.index({ category: 1, price: 1 });
productSchema.index({ product: "text" });

const Product = mongoose.model("products", productSchema);
module.exports = Product;
