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