const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

// Initialize Server
const app = express();

// Connect DB
connectDB();

// Initialize Middleware
app.use(express.json({ extended: false }));

// Route Testing
// app.get('/', (req, res) => { res.json({ msg: 'Welcome to the Contact Keeper API.......'})});

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes//auth'));
app.use('/api/contact', require('./routes/contact'));

// Serve static assets in production
if(process.env.NODE_ENV === 'production') {
    // Set Static folder
    app.use(express.static('client/build'));

    app.get('*', (re, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));)
}

// Creating Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));