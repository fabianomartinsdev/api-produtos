const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: [true, "O campo nome é obrigatório"],
      trim: true,
    },
    preco: {
      type: Number,
      required: [true, "O campo preco é obrigatório"],
      min: [0, "O preço não pode ser negativo"],
    },
    categoria: {
      type: String,
      required: [true, "O campo categoria é obrigatório"],
      trim: true,
    },
    estoque: {
      type: Number,
      required: [true, "O campo estoque é obrigatório"],
      min: [0, "O estoque não pode ser negativo"],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Product", productSchema);
