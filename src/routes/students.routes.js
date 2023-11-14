import { Router } from "express";
import {
     buscarTodosAlunos,
     buscarTodosAlunosPorId,
     criarAluno,
     editarAluno,
     excluirAluno
     } from "../controllers/students.controller.js";

const rotasAlunos = Router();

rotasAlunos.get("/", buscarTodosAlunos);

rotasAlunos.get("/:id", buscarTodosAlunosPorId);

rotasAlunos.post("/", criarAluno);

rotasAlunos.put("/:id", editarAluno);

rotasAlunos.delete("/:id", excluirAluno);

export default rotasAlunos;