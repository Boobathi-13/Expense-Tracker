const mongoose = require("mongoose");
const colors = require("colors");
const connectDb = async () => {
  try {
    console.log(process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;
