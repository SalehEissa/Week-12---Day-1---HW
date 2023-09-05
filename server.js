// Import the Express.js framework
const express = require('express');

// Create an instance of Express
const app = express();

// Set the port to 3000
const port = 3000;

// Create a GET route that responds with "Welcome to the Pokemon App!"
app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
