const orderService = require("../services/orderService");

function listarPedidos(req, res) {
  const pedidos = orderService.listarPedidos();

  res.json(pedidos);
}

module.exports = {
  listarPedidos,
};
