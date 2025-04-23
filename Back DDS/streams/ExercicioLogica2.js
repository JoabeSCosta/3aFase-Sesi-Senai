const produtos = [
    { nome: 'Arroz', categoria: 'Alimento', preco: 25, estoque: 5 },
    { nome: 'Feijão', categoria: 'Alimento', preco: 10, estoque: 15 },
    { nome: 'Sabonete', categoria: 'Higiene', preco: 3, estoque: 8 },
    { nome: 'Detergente', categoria: 'Limpeza', preco: 4, estoque: 3 },
    { nome: 'Papel Higiênico', categoria: 'Higiene', preco: 12, estoque: 20 }
];

produtos 
.filter(({estoque}) => estoque < 10)
.map(({nome, preco}) => {
    let precoAtualizado = preco * 0.85;
    return {
        nome,
        preco: precoAtualizado
    };
})
.forEach(({nome, preco}) => {
    console.log(`Estoque baixo: Produto ${nome} - Novo Preço: R$${preco.toFixed(2)}`);
});