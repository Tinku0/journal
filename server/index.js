// index.js
const express = require('express');
const cors = require('cors');
const { connectToDB } = require('./db/connectToDatabase');
const userRoutes = require('./routes/user');

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
