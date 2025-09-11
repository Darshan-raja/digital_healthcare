// netlify/functions/chats.js
const mongoose = require('mongoose');

// Store connection status
let isConnected;

const connectToDatabase = async () => {
  if (isConnected) {
    console.log('=> using existing database connection');
    return;
  }

  console.log('=> using new database connection');
  // IMPORTANT: Use a real MongoDB Atlas connection string from Netlify environment variables
  const db = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/healthcare_portal');
  isConnected = db.connections[0].readyState;
};

const chatSchema = new mongoose.Schema({
  user: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
});

// Ensure the model is not re-compiled if it already exists
const Chat = mongoose.models.Chat || mongoose.model('Chat', chatSchema);

exports.handler = async (event, context) => {
  // This allows the function to stay alive for further requests
  context.callbackWaitsForEmptyEventLoop = false;

  await connectToDatabase();

  if (event.httpMethod === 'POST') {
    const chat = new Chat(JSON.parse(event.body));
    await chat.save();
    return {
      statusCode: 200,
      body: JSON.stringify(chat)
    };
  }

  const chats = await Chat.find().sort({ timestamp: 1 });
  return {
    statusCode: 200,
    body: JSON.stringify(chats)
  };
};