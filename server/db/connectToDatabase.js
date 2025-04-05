const mongoose = require('mongoose');

let isConnected = false;

const connectToDB = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI);

    isConnected = true;
    console.log('Database connected');
  } catch (err) {
    console.error('DB Connection Error:', err);
    throw err;
  }
};

module.exports = { connectToDB };