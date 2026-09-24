const express = require("express");

const studentController = require("../controllers/studentController");

const router = express.Router();

// router.get("/area-do-aluno", activeStudent, studentController.validaAluno);
router.get("/alunos", studentController.listarAlunos);

router.get("/alunos/:id", studentController.buscarAlunoPorId);

router.post("/alunos", studentController.criarAluno);

router.put("/alunos/:id", studentController.atualizarAluno);

router.delete("/alunos/:id", studentController.deletarAluno);

module.exports = router;
