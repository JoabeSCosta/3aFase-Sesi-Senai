// Atividades
// 1) Crie uma funcao para receber um numero e retornar
// se e positivo, negativo ou zero.

// function positivoNegativoZero(numero) {
//     if (numero > 0) {
//         return "Positivo";
//     } else if (numero < 0) {
//         return "Negativo";
//     } else {
//         return "Zero";
//     }
// }

// let numero = 6; 
// console.log(positivoNegativoZero(numero));

// 2) Crie uma funcao para que escreva os dias da semana
// a partir do numeral (1 a 7) recebido por parametro.

// function diasDaSemana(numero) {
//     switch (numero) {
//         case 1:
//             return "Domingo";
//         case 2:
//             return "Segunda";
//         case 3:
//             return "Terça";
//         case 4:
//             return "Quarta";
//         case 5:
//             return "Quinta";
//         case 6:
//             return "Sexta";
//         case 7:
//             return "Sábado";
//         default:
//             return "Dia inválido";
//     }
// }

// let numero = 6;
// console.log(diasDaSemana(numero));

// 3) Crie uma funcao para realizar a tabuada de um determinado
// numero que recebe por parametro

// function tabuada(numero) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${numero} x ${i} = ${numero * i}`);
//     }
// }

// let numero = 5;
// tabuada(numero);

// 4) Crie uma funcao para receber um numero e apresentar
// a contagem regressiva do mesmo.

// function contagemRegressiva(numero) {
//     for (let i = numero; i >= 0; i--) {
//         console.log(i);
//     }
// }

// 5) Crie uma funcao que realiza a contagem de vogais
// de uma frase recebida por parametro.

// function contagemVogais(frase) {
//     let contagem = 0;
//     for (let letra of frase) {
//         if (
//             letra === "a" ||
//             letra === "e" ||
//             letra === "i" ||
//             letra === "o" ||
//             letra === "u"
//         ) {
//             contagem++;
//         }
//     }
//     return contagem;
// }

// let frase = "O rato roeu a roupa do rei de Roma";
// console.log(contagemVogais(frase));

// 6) Crie uma funcao de medias escolares ao qual ira receber
// um array por parametro onde contera todas as medias dos alunos
// e devera retornar se o aluno esta
// aprovado (>=7), reprovado (<5) ou de recuperacao (<7 >=5)

function verificarSituacaoAlunos(medias) {
    let situacoes = []; 

    for (let i = 0; i < medias.length; i++) {
        if (medias[i] >= 7) {
            situacoes.push("Aprovado");
        } else if (medias[i] < 5) {
            situacoes.push("Reprovado");
        } else {
            situacoes.push("Recuperação");
        }
    }

    return situacoes; 
}

let medias = [8.5, 4.9, 6.0, 7.0, 3.2, 9.8];

let situacoes = verificarSituacaoAlunos(medias);
console.log(situacoes);