// exercicio 2.3
const vendas = [
    { cliente: 'JoÃ£o', valor: 80 },
    { cliente: 'Maria', valor: 150 },
    { cliente: 'Pedro', valor: 120 }
  ];

  vendas.forEach(({cliente, valor}) => {
    if (valor > 100) {
        console.log(`Obrigado pela compra, ${cliente}! VocÃª gastou R$${valor}.`);
    }
  });