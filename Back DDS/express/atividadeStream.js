/*# atividade stream (callback)

## 🔥 Versão Evoluída: Loja com Carrinho e Vários Pagamentos

### 🎯 Cenário:

Temos um **carrinho de compras** com vários pedidos. Cada pedido tem:

- o **nome do cliente**
- o **valor**
- o **tipo de pagamento** (cartão, boleto, pix, cripto)

Vamos:

1. Filtrar só pedidos com valor acima de R$100 (com `filter`)
2. Mapear os pedidos para preparar os callback dos dados (`map`)
3. Processar os pagamentos com `forEach`, usando **callbacks diferentes**

dados para processamento

const pedidos = [
{ cliente: "Ana", valor: 150.00, tipo: "cartao" },
{ cliente: "Bruno", valor: 89.90, tipo: "boleto" },
{ cliente: "Carla", valor: 120.00, tipo: "pix" },
{ cliente: "Diego", valor: 250.00, tipo: "cripto" },
{ cliente: "Erica", valor: 45.00, tipo: "cartao" },
];*/

const pedidos = [
    { cliente: "Ana", valor: 150.00, tipo: "cartao" },
    { cliente: "Bruno", valor: 89.90, tipo: "boleto" },
    { cliente: "Carla", valor: 120.00, tipo: "pix" },
    { cliente: "Diego", valor: 250.00, tipo: "cripto" },
    { cliente: "Erica", valor: 45.00, tipo: "cartao" },
]

const filtrarPedidos = pedidos.filter(pedido => pedido.valor >= 100);

const processarPedidos = filtrarPedidos.map(pedido => {
    return {
        ...pedido
    }
})

console.log(processarPedidos)

const pagarComCartao = (pedido) => {
    console.log(`💳 ${pedido.cliente} pagou R$${pedido.valor.toFixed(2)} com cartão de crédito.`);
};

const pagarComBoleto = (pedido) => {
    console.log(`📄 Boleto gerado para ${pedido.cliente} no valor de R$${pedido.valor.toFixed(2)}.`);
};

const pagarComPix = (pedido) => {
    console.log(`⚡ ${pedido.cliente} pagou R$${pedido.valor.toFixed(2)} via PIX.`);
};

const pagarComCripto = (pedido) => {
    console.log(`🪙  ${pedido.cliente} pagou com cripto, equivalente a R$${pedido.valor.toFixed(2)}.`);
};

const processarPagamento = (pedido) => {
    switch (pedido.tipo) {
        case "cartao":
            pagarComCartao(pedido);
            break;
        case "boleto":
            pagarComBoleto(pedido);
            break;
        case "pix":
            pagarComPix(pedido);
            break;
        case "cripto":
            pagarComCripto(pedido);
            break;
        default:
            console.log(`Tipo de pagamento desconhecido para ${pedido.cliente}.`);
    }
}

processarPedidos.forEach(pedido => {
    processarPagamento(pedido);
});