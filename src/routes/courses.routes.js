import { Router } from "express";
import {
     buscarTodosCursos,
     buscarTodosCursosPorId,
     criarCurso,
     editarCurso,
     excluirCurso
     } from "../controllers/courses.controller.js";

const rotasCursos = Router();

rotasCursos.get("/", buscarTodosCursos);

rotasCursos.get("/:id", buscarTodosCursosPorId);

rotasCursos.post("/", criarCurso);

rotasCursos.put("/:id", editarCurso);

rotasCursos.delete("/:id", excluirCurso);

export default rotasCursos;