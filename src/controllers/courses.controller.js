

export const buscarTodosCursos = (req, res) => {

    const courses = list.getAllCourses();

    if(!courses.length) {
        return res.status(404).send({
            message: "Nenhum curso cadastrado",
            status: "Not found"
        })
    }


    return res.status(200).send({
    message: 'Todos cursos via controller',
    status:"ok"
});
};

export const buscarTodosCursosPorId = (req, res) => {
    const { id } = req.params;

    const course = list.getCourseById(id);

    if(!course) {
        return res.status(404).send({
            message: " curso não cadastrado ",
            status: "Not found"
        }) 
    }
    return res.status(200).send({
        message: `Curso com ID ${id}`,
        origem: "controller",
    });
};

export const criarCurso = (req, res) => {
    const {nome, descricao, limiteVaga} = req.body;

    if(!nome || !descricao || !limiteVaga) {
        return res.status(400).send({
            message: "dados inválidos",
            origem: "controller"
        });
    };

    return res.status(201).send({
        message: "Rota POST cursos", 
        origem: "controller",
    });
};

export const editarCurso = (req, res) => {
    const {nome, descricao, limiteVaga} = req.body;

    if(!nome || !descricao || !limiteVaga) {
        return res.status(400).send({
            message: "dados inválidos",
            origem: "controller"
        });
    };

    return res.status(201).send({
        message: "Rota PUT cursos", 
        origem: "controller",
    });
};

export const excluirCurso = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({
        message: `Rota DELETE curso com ID ${id}`,
        origem: "controller",
    });
};