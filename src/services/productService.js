let produtos = [
  {
    id: 1,
    nome: "Mouse Gamer",
    preco: 120,
    categoria: "Informática",
    estoque: 10,
  },
  {
    id: 2,
    nome: "Teclado Mecânico",
    preco: 250,
    categoria: "Informática",
    estoque: 5,
  },
  {
    id: 3,
    nome: "Cadeira Gamer",
    preco: 900,
    categoria: "Móveis",
    estoque: 2,
  },
];

function listarProdutos() {
  return produtos;
}

function buscarProdutoPorId(id) {
  return produtos.find((produto) => produto.id === id);
}

function criarProduto(dados) {
  const { nome, preco, categoria, estoque } = dados;

  const novoProduto = {
    id: produtos.length + 1,
    nome,
    preco,
    categoria,
    estoque,
  };

  produtos.push(novoProduto);

  return novoProduto;
}

function atualizarProduto(id, dados) {
  const produto = buscarProdutoPorId(id);

  if (!produto) {
    return null;
  }

  produto.nome = dados.nome;
  produto.preco = dados.preco;
  produto.categoria = dados.categoria;
  produto.estoque = dados.estoque;

  return produto;
}

function deletarProduto(id) {
  const produtoExiste = produtos.some((produto) => produto.id === id);

  if (!produtoExiste) {
    return false;
  }

  produtos = produtos.filter((produto) => produto.id !== id);

  return true;
}

module.exports = {
  listarProdutos,
  buscarProdutoPorId,
  criarProduto,
  atualizarProduto,
  deletarProduto,
};
