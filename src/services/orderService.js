let pedidos = [
  {
    id: 1,
    cliente: "Carlos",
    produto: "Mouse Gamer",
    quantidade: 2,
    total: 240,
    status: "Pago",
  },
];

function listarPedidos() {
  return pedidos;
}

function buscarPedidoPorId(id) {
  return pedidos.find((pedido) => pedido.id === id);
}

function criarPedido(dados) {
  const { cliente, produto, quantidade, total, status } = dados;

  const novoPedido = {
    id: pedidos.length + 1,
    cliente,
    produto,
    quantidade,
    total,
    status,
  };

  pedidos.push(novoPedido);

  return novoPedido;
}

function atualizarPedido(id, dados) {
  const pedido = buscarPedidoPorId(id);

  if (!pedido) {
    return null;
  }

  pedido.cliente = dados.cliente;
  pedido.produto = dados.produto;
  pedido.quantidade = dados.quantidade;
  pedido.total = dados.total;
  pedido.status = dados.status;

  return pedido;
}

function deletarPedido(id) {
  const pedidoExiste = pedidos.some((pedido) => pedido.id === id);

  if (!pedidoExiste) {
    return false;
  }

  pedidos = pedidos.filter((pedido) => pedido.id !== id);

  return true;
}

module.exports = {
  listarPedidos,
  buscarPedidoPorId,
  criarPedido,
  atualizarPedido,
  deletarPedido,
};
