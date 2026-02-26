const mongoose = require("mongoose");

const Database = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database connection succesfilly : ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error ${err.message}`);
    process.exit(1);
  }
};

module.exports = Database;
