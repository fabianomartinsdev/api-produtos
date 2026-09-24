function timeMiddleware(req, res, next) {
  try {
    const horarioBrasilia = new Date().toLocaleString("pt-BR");

    console.log(`Requisição ${horarioBrasilia}`);

    next();
  } catch (error) {
    next(error);
  }
}

module.exports = timeMiddleware;
