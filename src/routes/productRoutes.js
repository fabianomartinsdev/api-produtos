const express = require("express");

const productController = require("../controllers/productController");

const verificarAdmin = require("../middleware/adminMiddleware");

const router = express.Router();

router.get("/produtos", productController.listarProdutos);

router.get("/produtos/:id", productController.buscarProdutoPorId);

router.post("/produtos", verificarAdmin, productController.criarProduto); // verificarAdmin fica no meio pq é middleware

router.put("/produtos/:id", productController.atualizarProduto);

router.delete("/produtos/:id", productController.deletarProduto);

router.get("/erro-teste", (req, res, next) => {
  try {
    throw new Error("Erro forçado de teste");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
