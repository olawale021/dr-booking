const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env.local' });


const app = express();
app.use('/register', require('./routers/adminRouters') );

// Connect to MongoDB Atlas database
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB Atlas');
});




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
