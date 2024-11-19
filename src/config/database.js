const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://shivendrakeshari581:PxVNoNqEifnicBBt@cluster0.vn7d7.mongodb.net/Devt"
  );
};

module.exports = connectDB;
