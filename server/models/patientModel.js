const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    gender: String,
    phoneNumber: {type: String, unique: true},
    password: { type: String, required: true },
    address: {
        street: {
          type: String,
          required: true
        },
        city: {
          type: String,
          required: true
        },
        state: {
          type: String,
          required: true
        },
        postcode: {
          type: String,
          required: true
        }
      },
    imageUrl: String,
    bloodGroup: String,
    email: String,
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
