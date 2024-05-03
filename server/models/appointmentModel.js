const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
    date: Date,
    time: String,
    status: { type: String, default: 'requested' },
    paymentStatus: { type: String, default: 'pending' }, // Default value 'pending'
    reason: String,
    appointmentType: String,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
