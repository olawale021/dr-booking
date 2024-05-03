const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  firstName: String,
  lastName: String,
  dateOfBirth: Date,
  gender: String,
  phoneNumber: String,
  password: { type: String, required: true },
  address: String,
  hospital: String,
  specialty: String,
  registrationStatus: { type: String, default: 'pending' },
  imageSrc: String,
  biography: String,
  education: String,
  experience: String,
  license: String,
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
