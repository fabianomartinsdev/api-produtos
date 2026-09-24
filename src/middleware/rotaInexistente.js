function rotaInexistente(req, res) {
  res.status(404).json({
    erro: "Essa rota não existe na API.",
  });
}

module.exports = rotaInexistente;
