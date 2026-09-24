function verificarAdmin(req, res, next) {
  const { admin } = req.headers;

  if (admin !== "true") {
    return res.status(403).json({
      erro: "Acesso negado, apenas admin!!!",
    });
  }

  next();
}

module.exports = verificarAdmin;
