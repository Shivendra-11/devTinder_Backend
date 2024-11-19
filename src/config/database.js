const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://shivendrakeshari581:ViI9WpS7apqTVfeQ@cluster0.xdw7m.mongodb.net/DEVtinder"
  );
};

module.exports = connectDB;
