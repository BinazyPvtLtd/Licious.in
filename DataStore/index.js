const express = require('express');
const mongoose = require('mongoose');

// Set up the express app
const app = express();

// Allows us to accept the data in JSON format
app.use(express.json());

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));