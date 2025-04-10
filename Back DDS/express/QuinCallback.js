// Atividade para quinta
// crie uma funcao que receba por paramentro um callback, onde espera receber um parametro de objeto que contenha o nome, a disciplina e a idade do aluno.
// As funcoes de callback serao 3, uma funcao apresenta o nome do aluno (console.log), uma outra trabalha com a idade do aluno e a 3 trabalha em qual disciplina aquele aluno esta estudando.

const processaAluno = (aluno, callback) => {
    callback(aluno);
};

const aluno = {
    nome: "Joabe",
    idade: 20,
    disciplina: "Matemática"
};

const apresentaNome = (aluno) => {
    console.log(`Nome do aluno: ${aluno.nome}`);
};

const trabalhaIdade = (aluno) => {
    console.log(`Idade do aluno: ${aluno.idade}`);
};

const trabalhaDisciplina = (aluno) => {
    console.log(`Disciplina do aluno: ${aluno.disciplina}`);
};


processaAluno(aluno, apresentaNome);
processaAluno(aluno, trabalhaIdade);
processaAluno(aluno, trabalhaDisciplina);