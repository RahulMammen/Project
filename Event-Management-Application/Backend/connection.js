// db/connection.js
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI).then(async () => {
  console.log('Connected to MongoDB');
  // Your logic here...
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});
