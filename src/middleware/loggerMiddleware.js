function logger(req, res, next) {
  console.log(`
--------------------------------------
MÉTODO: ${req.method} URL: ${req.url}`);

  next();
}

module.exports = logger;
