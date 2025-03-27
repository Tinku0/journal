const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const configDotenv = require('dotenv').config;
const userRoutes = require('./routes/user');
import connectToDB from './db/connectToDatabase';
configDotenv();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

// app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/auth', userRoutes);

app.listen(PORT, async () => {    
  console.log(`Server is running on port ${PORT}`);
  await connectToDB();
});