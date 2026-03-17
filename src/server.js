const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Database connection
const dbURI = 'YOUR_DATABASE_URI'; // Replace with your actual database URI
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Database connection error:', err));

// Middleware
app.use(express.json());

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
