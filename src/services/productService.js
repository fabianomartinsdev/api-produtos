const Product = require("../models/Product");

const listarProdutos = async () => {
  return await Product.find();
};

const buscarProdutoPorId = async (id) => {
  return await Product.findById(id);
};

const criarProduto = async (dadosDoProduto) => {
  return await Product.create(dadosDoProduto);
};

const atualizarProduto = async (id, dados) => {
  const produtoAtualizado = await Product.findByIdAndUpdate(id, dados, {
    new: true,
  });

  return produtoAtualizado;
};

const deletarProduto = async (id) => {
  return await Product.findByIdAndDelete(id);
};

module.exports = {
  listarProdutos,
  buscarProdutoPorId,
  criarProduto,
  atualizarProduto,
  deletarProduto,
};
