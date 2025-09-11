// netlify/functions/register.js
const mongoose = require('mongoose');

let isConnected;

const connectToDatabase = async () => {
  if (isConnected) {
    return;
  }
  const db = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/healthcare_portal');
  isConnected = db.connections[0].readyState;
};

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }, // In a real app, this should be hashed
  phone: String,
  dateOfBirth: String,
  role: String
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    await connectToDatabase();
    const userData = JSON.parse(event.body);
    // Note: In a real-world app, you must hash the password before saving.
    const user = new User(userData);
    await user.save();
    return { statusCode: 200, body: JSON.stringify({ success: true, user }) };
  } catch (err) {
    return { statusCode: 400, body: JSON.stringify({ success: false, error: err.message }) };
  }
};