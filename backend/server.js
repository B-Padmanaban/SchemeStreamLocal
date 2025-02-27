require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const schemeRoutes = require('./routes/schemeRoutes');
const applicationRoutes = require('./routes/applicationRoutes');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS
const PORT = process.env.PORT || 5000;  // Define PORT here


// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
const app = express();
app.use(cors({ 
  origin: "*", // Allow all incomming request
  methods: "GET, POST, PUT, DELETE",
  allowedHeaders: "Content-Type, Authorization",
  credentials: true
}));
app.use(express.json());
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/schemes', schemeRoutes);
app.use('/api/applications', applicationRoutes);

// Request Logger Middleware
app.use((req, res, next) => {
    console.log(`Incoming Request: ${req.method} ${req.url}`);
    next();
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.get("/",(req, res) =>{
  res.send("Backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Instead of app.listen, export app for Vercel
module.exports = app;