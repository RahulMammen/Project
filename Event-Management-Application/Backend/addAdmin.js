const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Load User model
const User = require('./models/User');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log('Connected to MongoDB');

  const adminEmail = 'admin@gmail.com';
  const adminPassword = '111';

  // Check if admin user already exists
  const adminExists = await User.findOne({ email: adminEmail });
  if (adminExists) {
    console.log('Admin user already exists');
    mongoose.disconnect();
    return;
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(adminPassword, salt);

  // Create the admin user
  const adminUser = new User({
    name: 'Admin',
    email: adminEmail,
    contactNumber: '1234567890',
    password: hashedPassword,
    isAdmin: true, // Set the isAdmin field to true
  });

  await adminUser.save();
  console.log('Admin user created');
  mongoose.disconnect();
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});
