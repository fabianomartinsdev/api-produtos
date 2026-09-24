const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  curso: { type: String, required: true },
  ativo: { type: Boolean, required: true },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
