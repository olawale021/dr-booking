const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env.local' });


const app = express();
app.use(express.json());
app.use(cors())
app.use('/admin', require('./routers/adminRouters') );
app.use('/patient', require('./routers/patientRouters') );
app.use('/doctor', require('./routers/doctorRouters') );


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




const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
