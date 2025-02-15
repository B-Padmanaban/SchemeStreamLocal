require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db.js');

const app = express();
app.use(express.json());

const authRoutes = require('./routes/authRoutes.js');
const schemeRoutes = require('./routes/schemeRoutes.js');
const applicationRoutes = require('./routes/applicationRoutes.js');


connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/schemes', schemeRoutes);
app.use('/api/applications', applicationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use((req, res, next) => {
    console.log(`Incoming Request: ${req.method} ${req.url}`);
    next();
  });

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
