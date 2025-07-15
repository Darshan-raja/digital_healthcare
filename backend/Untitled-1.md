// Send message to backend
fetch('http://localhost:5000/api/chats', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ user: 'Sarah', message: 'Hello!' })
})
.then(res => res.json())
.then(data => console.log(data));

// Get chat history
fetch('http://localhost:5000/api/chats')
  .then(res => res.json())
  .then(data => console.log(data));