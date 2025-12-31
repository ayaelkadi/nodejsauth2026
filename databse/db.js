const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB is connected successfully");
  } catch (e) {
    console.error("MongoDB is connection failed");
    process.exit(1);
  }
};
module.exports = connectToDB;
