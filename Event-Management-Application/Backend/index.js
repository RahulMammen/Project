const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events'); // Import the events routes
require('./connection'); // Ensure this is setting up the MongoDB connection if needed

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Use the routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes); // Add this line to use the events routes

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
