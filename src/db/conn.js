const mongoose = require("mongoose");

const DB_URL = "mongodb://127.0.0.1:27017/Registration";

async function connectionDB() {
  try {
    await mongoose.connect(DB_URL);
    console.log("connected sucessfully with db");
  } catch (error) {
    console.log("not connected");
  }
}

module.exports = { connectionDB };
