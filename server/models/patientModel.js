const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    gender: String,
    phoneNumber: String,
    password: { type: String, required: true },
    address: String,
    imageUrl: String,
    bloodGroup: String,
    email: String,
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
