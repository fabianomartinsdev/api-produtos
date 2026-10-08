const Student = require("../models/Student");

async function listarAlunos() {
  return await Student.find();
}

async function buscarAlunoPorId(id) {
  return await Student.findById(id);
}

async function criarAluno(aluno) {
  return await Student.create(aluno);
}

async function atualizarAluno(id, dados) {
  const alunoAtualizado = await Student.findByIdAndUpdate(id, dados, {
    new: true,
  });
  return alunoAtualizado;
}

async function deletarAluno(id) {
  return await Student.findByIdAndDelete(id);
}

module.exports = {
  listarAlunos,
  criarAluno,
  buscarAlunoPorId,
  atualizarAluno,
  deletarAluno,
};
