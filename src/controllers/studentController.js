const studentService = require("../services/studentService");

function listarAlunos(req, res) {
  const alunos = studentService.listarAlunos();

  res.json(alunos);
}

function buscarAlunoPorId(req, res) {
  const id = Number(req.params.id);

  const aluno = studentService.buscarAlunoPorId(id);

  if (!aluno) {
    return res.status(404).json({
      erro: "Aluno não encontrado.",
    });
  }

  res.json(aluno);
}

function criarAluno(req, res) {
  const { nome, email, curso, ativo } = req.body;

  if (!nome || !email || !curso || ativo === undefined) {
    return res.status(400).json({
      erro: "Algum dado está incompleto.",
    });
  }

  const novoAluno = studentService.criarAluno({ nome, email, curso, ativo });

  res.status(201).json(novoAluno);
}

function atualizarAluno(req, res) {
  const id = Number(req.params.id);
  const { nome, email, curso, ativo } = req.body;

  if (!nome || !email || !curso || ativo === undefined) {
    return res.status(400).json({
      erro: "Nome, email e curso são obrigatórios.",
    });
  }

  const AlunoAtualizado = studentService.atualizarAluno(id, {
    nome,
    email,
    curso,
    ativo,
  });

  if (!AlunoAtualizado) {
    return res.status(404).json({
      erro: "Aluno não encontrado.",
    });
  }

  res.json(AlunoAtualizado);
}

function deletarAluno(req, res) {
  const id = Number(req.params.id);

  const deletado = studentService.deletarAluno(id);

  if (!deletado) {
    return res.status(404).json({
      erro: "Aluno não encontrado.",
    });
  }

  res.json({
    mensagem: "Aluno deletado com sucesso.",
  });
}

module.exports = {
  listarAlunos,
  buscarAlunoPorId,
  criarAluno,
  atualizarAluno,
  deletarAluno,
};
