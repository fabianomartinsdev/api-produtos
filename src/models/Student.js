const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, "O campo nome é obrigatório"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "O campo email é obrigatório"],
  },
  curso: {
    type: String,
    required: [true, "O campo curso é obrigatório"],
  },
  ativo: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Student", studentSchema);
