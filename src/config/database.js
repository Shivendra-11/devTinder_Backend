const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://shivendrakeshari581:1FpH56pRzqYj8HFi@cluster0.k1mkj5f.mongodb.net/DevTinder-5"
  );
};

module.exports = connectDB;
