let alunos = [
  {
    id: 1,
    nome: "Ana",
    email: "ana@email.com",
    curso: "Node.js",
    ativo: true,
  },
  {
    id: 2,
    nome: "Bruno",
    email: "bruno@email.com",
    curso: "React",
    ativo: true,
  },
];

function listarAlunos() {
  return alunos;
}

function buscarAlunoPorId(id) {
  return alunos.find((aluno) => aluno.id === id);
}

function criarAluno(aluno) {
  const novoAluno = {
    id: alunos.length > 0 ? Math.max(...alunos.map((a) => a.id)) + 1 : 1,
    ...aluno,
  };
  alunos.push(novoAluno);
  return novoAluno;
}

function atualizarAluno(id, dados) {
  const aluno = buscarAlunoPorId(id);

  if (!aluno) {
    return null;
  }

  aluno.nome = dados.nome;
  aluno.email = dados.email;
  aluno.curso = dados.curso;
  aluno.ativo = dados.ativo;

  return aluno;
}

function deletarAluno(id) {
  const alunoExiste = alunos.some((aluno) => aluno.id === id);

  if (!alunoExiste) {
    return false;
  }

  alunos = alunos.filter((aluno) => aluno.id !== id);

  return true;
}

module.exports = {
  listarAlunos,
  criarAluno,
  buscarAlunoPorId,
  atualizarAluno,
  deletarAluno,
};
