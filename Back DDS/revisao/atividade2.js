/*2) Crie uma função que retorna um objeto com a posição dos corredores de acordo
com a ordem de entrado do array deve adicionar a pocição, a madalha de (ouro, prata, bronze, sem medalha)
e o nome do corredor do objeto esses são os corredores ["João", "Marcos", "Maria", "Bruno", "Heitor","Joaquina"] */

// const corredores = ["João", "Marcos", "Maria", "Bruno", "Heitor","Joaquina"];

// const resultado = corredores.map((corredor, posicao) => {
//     let medalha;
//     switch (posicao) {
//         case 0:
//             medalha = "Ouro";
//             break;
//         case 1:
//             medalha = "Prata";
//             break;
//         case 2:
//             medalha = "Bronze";
//             break;
//         default:
//             medalha = "Sem medalha";
//             break;
//     }
//     console.log("Corredor: ", corredor, " - ", medalha);
//     return corredores
// });

const nomeCorredores = ["João", "Marcos", "Maria", "Bruno", "Heitor","Joaquina"];

const corredores = nomeCorredores.map((nomeCorredor, index) => {
    return entregaMedalha(nomeCorredor, index +1);
});

function entregaMedalha(nomeCorredor, posicao){
    let medalha;
    switch (posicao) {
        case 1:
            medalha = "Ouro";
            break;
        case 2:
            medalha = "Prata";
            break;
        case 3:
            medalha = "Bronze";
            break;
        default:
            medalha = "Sem medalha";
            break;
    }

        return {
            "Nome": nomeCorredor,
            "Posicao": posicao,
            "Medalha": medalha
        };
    }

console.log(corredores);