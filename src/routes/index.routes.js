import {Router} from "express";
import rotasAlunos from "./students.routes.js";
import rotasCursos from "./courses.routes.js"

const rotas = Router();

rotas.use("/alunos", rotasAlunos);
rotas.use("/cursos", rotasCursos);

rotas.get("/", (req, res) => {
    return res.status(200).send({message: "servidor ok!"});
});

export default rotas;