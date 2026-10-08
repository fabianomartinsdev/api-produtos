const User = require("../models/User");

const buscarUsuarioPorEmail = async (email) => {
  const usuario = await User.findOne({ email });
  return usuario;
};

const criarUsuario = async (dadosdeUsuario) => {
  const novoUsuario = await User.create(dadosdeUsuario);
  return novoUsuario;
};

module.exports = {
  buscarUsuarioPorEmail,
  criarUsuario,
};
