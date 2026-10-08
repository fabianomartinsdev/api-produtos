const mongoose = require("mongoose");
const studentService = require("../services/studentService");

function isValidObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

const listarAlunos = async (req, res, next) => {
  try {
    const alunos = await studentService.listarAlunos();
    return res.json(alunos);
  } catch (error) {
    next(error);
  }
};

const buscarAlunoPorId = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        erro: "ID inválido.",
      });
    }

    const aluno = await studentService.buscarAlunoPorId(id);

    if (!aluno) {
      return res.status(404).json({
        erro: "aluno não encontrado.",
      });
    }

    res.json(aluno);
  } catch (error) {
    next(error);
  }
};

const criarAluno = async (req, res) => {
  try {
    const aluno = await studentService.criarAluno(req.body);
    return res.status(201).json(aluno);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

function atualizarAluno(req, res) {
  const id = Number(req.params.id);
  const { nome, email, curso, ativo } = req.body;

  if (!nome || !email || !curso || ativo === undefined) {
    return res.status(400).json({
      erro: "Todos os campos são obrigatórios.",
    });
  }

  const alunoAtualizado = studentService.atualizarAluno(id, {
    nome,
    email,
    curso,
  });

  if (!alunoAtualizado) {
    return res.status(404).json({
      erro: "aluno não encontrado.",
    });
  }

  res.json(alunoAtualizado);
}

async function deletarAluno(req, res) {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        erro: "ID inválido.",
      });
    }

    const alunoDeletado = await studentService.deletarAluno(id);

    if (!alunoDeletado) {
      return res.status(404).json({
        message: "Aluno não encontrado para exclusão.",
      });
    }

    return res.status(200).json({
      message: "Aluno removido com sucesso.",
      aluno: alunoDeletado,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ error: "ID de aluno inválido." });
    }
  }
  return res.status(500).json({ error: error.message });
}

module.exports = {
  listarAlunos,
  buscarAlunoPorId,
  criarAluno,
  atualizarAluno,
  deletarAluno,
};
