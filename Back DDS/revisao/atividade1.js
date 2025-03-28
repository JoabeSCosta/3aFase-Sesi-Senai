/* 1) Crie uma função que retorne a comissão do valor das
vendas do seguinte array [10000, 5000, 8000, 6000, 9000],
sabendo que a comissão se da em 10% do valor, apresente o resultado em um console.log dentro da estrutura */

// const vendas = [10000, 5000, 8000, 6000, 9000];

// const comissao = vendas.map(venda => {
//     return venda * 0.1;
// });

// console.log("Comissão: ",comissao);

const vendas = [10000, 5000, 8000, 6000, 9000];

function calcularComissao(valor) {

    if (valor <0) {
        return;
    }

    const comissao = valor * 0.1;
    console.log("A venda de " + valor + " teve uma comissão de " + comissao);
}

vendas.forEach(venda => {
    calcularComissao(venda);
});