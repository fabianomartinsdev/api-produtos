const express = require("express");

const orderController = require("../controllers/orderController");

const router = express.Router();

router.get("/pedidos", orderController.listarPedidos);

// router.get("/pedidos/:id", orderController.buscarPedidoPorId);

// router.post("/pedidos", orderController.criarPedido);

// router.put("/pedidos/:id", orderController.atualizarPedido);

// router.delete("/pedidos/:id", orderController.deletarPedido);

module.exports = router;
