# Code Citations

## License: unknown
https://github.com/biswasprasana001/mern-mail/tree/2ce42f7da7792e878377fb9ac0a8fe9cd2b259d5/server.js

```
/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express
```


## License: unknown
https://github.com/sachinnsinghh/TODO-mern/tree/49cabfe9b00c1962a674f712f1bb56991c010960/api/server.js

```
express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())
```


## License: unknown
https://github.com/Pastlenomad/Explore-The-Aroma/tree/07fc0d64c346050166ef194419e04977b822610f/server/index.js

```
mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(
```

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

