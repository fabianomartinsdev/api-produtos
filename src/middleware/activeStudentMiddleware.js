function activeStudent(req, res, next) {
  const { active } = req.headers;

  if (active !== "true") {
    return res.status(403).json({
      erro: "Acesso negado, apenas alunos ativos",
    });
  }

  next();
}

module.exports = activeStudent;
