// index.js
const express = require('express');
const cors = require('cors');
const { connectToDB } = require('./db/connectToDatabase');
const userRoutes = require('./routes/user');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/auth', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World from API!');
});

let isConnected = false;

module.exports = async (req, res) => {
  if (!isConnected) {
    await connectToDB(); // Connect once
    isConnected = true;
    console.log("Connected to DB on Vercel.");
  }
  app(req, res); // Delegate request to Express
};

// 🖥️ Localhost Mode
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;

  app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connectToDB(); // Connect to DB on localhost
  });
}