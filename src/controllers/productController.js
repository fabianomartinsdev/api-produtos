const mongoose = require("mongoose");
const productService = require("../services/productService");

function isValidObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

const listarProdutos = async (req, res, next) => {
  try {
    const produtos = await productService.listarProdutos();
    return res.json(produtos);
  } catch (error) {
    next(error);
  }
};

const buscarProdutoPorId = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        erro: "ID inválido.",
      });
    }

    const produto = await productService.buscarProdutoPorId(id);

    if (!produto) {
      return res.status(404).json({
        erro: "Produto não encontrado.",
      });
    }

    res.json(produto);
  } catch (error) {
    next(error);
  }
};

const criarProduto = async (req, res) => {
  try {
    const product = await productService.criarProduto(req.body);
    return res.status(201).json(product);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

async function atualizarProduto(req, res, next) {
  try {
    const { id } = req.params;
    const { nome, preco, categoria, estoque } = req.body;

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        erro: "ID inválido.",
      });
    }

    if (!nome || !preco || !categoria || estoque === undefined) {
      return res.status(400).json({
        erro: "Nome, preço, categoria e estoque são obrigatórios.",
      });
    }

    if (preco <= 0) {
      return res.status(400).json({
        erro: "O preço deve ser maior que zero.",
      });
    }

    if (estoque < 0) {
      return res.status(400).json({
        erro: "O estoque não pode ser negativo.",
      });
    }

    const produtoAtualizado = await productService.atualizarProduto(id, {
      nome,
      preco,
      categoria,
      estoque,
    });

    if (!produtoAtualizado) {
      return res.status(404).json({
        erro: "Produto não encontrado.",
      });
    }

    res.json(produtoAtualizado);
  } catch (error) {
    next(error);
  }
}

async function deletarProduto(req, res) {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        erro: "ID inválido.",
      });
    }

    const produtoDeletado = await productService.deletarProduto(id);

    if (!produtoDeletado) {
      return res.status(404).json({
        message: "Produto não encontrado para exclusão.",
      });
    }

    return res.status(200).json({
      message: "Produto removido com sucesso.",
      product: produtoDeletado,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ error: "ID de produto inválido." });
    }
  }
  return res.status(500).json({ error: error.message });
}

module.exports = {
  listarProdutos,
  buscarProdutoPorId,
  criarProduto,
  atualizarProduto,
  deletarProduto,
};
