const express = require('express');
// const connectDB = require('./config/db');

// Initialize Server
const app = express();

// Connect DB
// connectDB();

// Initialize Middleware
app.use(express.json({ extended: false }));

// Route Testing
app.get('/', (req, res) => { res.send('SEVER API') });

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes//auth'));
app.use('/api/contact', require('./routes/contact'));

// Creating Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));