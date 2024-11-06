const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://gk630471:T3k1nvTVn5wHTqCN@cluster0.ek0rw.mongodb.net/DEVTINDER"
  );
};

module.exports = connectDB;
