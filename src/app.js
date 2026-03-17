const express = require('express');
const cors = require('cors');

const app = express();

// Middleware configuration
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Route imports
const exampleRoutes = require('./routes/exampleRoutes');
app.use('/api', exampleRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the Debate Statistics API!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
