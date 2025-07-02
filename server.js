// Node.js Express.js Tutorial Server
// This tutorial demonstrates basic Express.js server setup and routing

// Import the Express.js framework
const express = require('express');

// Create an Express application instance
const app = express();

// Define the port number for the server
const PORT = 3000;

// Tutorial Endpoint 1: Root route returning "Hello world"
// This demonstrates basic GET request handling in Express.js
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Tutorial Endpoint 2: Evening route returning "Good evening"
// This demonstrates how to create multiple routes in Express.js
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

// Start the server and listen on the specified port
// This creates the HTTP server and makes it available for requests
app.listen(PORT, () => {
  console.log(`Tutorial server is running on http://localhost:${PORT}`);
  console.log('Try visiting:');
  console.log(`  - http://localhost:${PORT}/ for "Hello world"`);
  console.log(`  - http://localhost:${PORT}/evening for "Good evening"`);
});