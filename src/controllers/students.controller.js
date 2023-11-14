export const buscarTodosAlunos = (req, res) => {
    return res.status(200).send({
    message: 'Todos alunos via controller',
    status:"ok"
});
};

export const buscarTodosAlunosPorId = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({
        message: `Aluno com ID ${id}`,
        origem: "controller",
    });
};

export const criarAluno = (req, res) => {
    const {nome, email, idade} = req.body;

    if(!nome || !email || !idade) {
        return res.status(400).send({
            message: "dados inválidos",
            origem: "controller"
        });
    };

    return res.status(201).send({
        message: "Rota POST alunos", 
        origem: "controller",
    });
};

export const editarAluno = (req, res) => {
    const {nome, email, idade} = req.body;

    if(!nome || !email || !idade) {
        return res.status(400).send({
            message: "dados inválidos",
            origem: "controller"
        });
    };

    return res.status(201).send({
        message: "Rota PUT alunos", 
        origem: "controller",
    });
};

export const excluirAluno = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({
        message: `Rota DELETE aluno com ID ${id}`,
        origem: "controller",
    });
};