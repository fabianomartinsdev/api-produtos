const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, "O campo nome é obrigatório"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "O campo email é obrigatório"],
    unique: true,
  },
  senha: {
    type: String,
    required: [true, "O campo senha é obrigatório"],
  },
  tipo: {
    type: String,
    default: "cliente",
  },
});

module.exports = mongoose.model("User", userSchema);
