// // funcao de callback
// const get = callback => {
//     const request = {
//         body: {
//             nome:"Maria",
//             idade: 25
//         }
//     }
//     const response = {
//         json: (texto) => {
//             console.log("Mensagem de texto", texto)
//         }
//     }
//     console.log("Esta e a mensagem da funcaoMensagem");
//     callback(request, response);
// }


// get((req, res) => {
//     console.log("Esta e a mensagem do callback1")
//     res.json("Meu texto")
// });

// get((req, res) => {
//     console.log("Esta e a mensagem do callback2")
//     console.log(req.body.nome);
// });





// crie uma funcao ( compra ) que receba uma funcao de callback onde deve se realizar todo o processamento dos produtos, alem do metodo que da baixa no sistema com o pagamento aprovado.
// Crie mais 2 funcoes que vao ser as funcoes de callback que serao chamadas dentro da funcao compra, uma se chama pagamentoPix e outra se chama pagamentoCartao, a pagamento pix devera ter uma funcao dentro dela onde aparece um console.log("QRcode disponivel"), na ultima etapa da funcao devera ser chamada a funcao de mensagemSucesso da funcao compra. Ja a funcao pagamento devera ter um console de ("Inserindo dados do cartao") alem de ter um console no final da funcao de "Pagamento aprovado" vindo da funcao compra.

const compra = (callback) => {
    console.log("processamento dos produtos");
    const mensagemSucesso = () => {
        console.log("pagamento efetuado com sucesso!")
    }
    callback(mensagemSucesso);
}
const pagamentoPix = (callback) => {
    console.log("QRcode disponivel")
    callback();
}
const pagamentoCartao = (callback) => {
    console.log("Inserindo dados do cartao");
    callback();
}

compra(pagamentoPix);

// compra(pagamentoCartao);


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
