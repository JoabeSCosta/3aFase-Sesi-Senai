// exercicio 1.3
const produtos = [
  { nome: "Camiseta", preco: 50 },
  { nome: "CalÃ§a", preco: 80 },
  { nome: "TÃªnis", preco: 120 },
];

const produtosComDesconto = produtos.map((produto) => {
  return {
    nome: produto.nome,
    precoComDesconto: produto.preco * 0.9,
  };
});

console.log(produtosComDesconto);