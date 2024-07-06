const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  // Add more fields as needed
}, { timestamps: true });

module.exports = mongoose.models.Doctor || mongoose.model('Doctor', doctorSchema);
