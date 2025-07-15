// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/healthcare_portal');

// Define a simple Chat schema
const chatSchema = new mongoose.Schema({
  user: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
});
const Chat = mongoose.model('Chat', chatSchema);

// API endpoint to get chat history
app.get('/api/chats', async (req, res) => {
  const chats = await Chat.find().sort({ timestamp: 1 });
  res.json(chats);
});

// API endpoint to post a new message
app.post('/api/chats', async (req, res) => {
  const chat = new Chat(req.body);
  await chat.save();
  res.json(chat);
});

// Sample data seeding
app.post('/api/chats/sample', async (req, res) => {
  const sampleChat = new Chat({
    user: 'Sarah',
    message: 'Hello, this is a test message!'
  });
  await sampleChat.save();
  res.json(sampleChat);
});

// Define a User schema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  dateOfBirth: String,
  role: String
});
const User = mongoose.model('User', userSchema);

// API endpoint to register a new user
app.post('/api/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({ success: true, user });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// Start server
app.listen(5000, () => console.log('Server running on port 5000'));

// For debugging: view chats in MongoDB shell
// db.chats.find().pretty()