const pedidos = [
    { cliente: "Ana", valor: 150.00, tipo: "cartao" },
    { cliente: "Bruno", valor: 89.90, tipo: "boleto" },
    { cliente: "Carla", valor: 120.00, tipo: "pix" },
    { cliente: "Diego", valor: 250.00, tipo: "cripto" },
    { cliente: "Erica", valor: 45.00, tipo: "cartao" },
    ];
    
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
    console.log(`🪙 ${pedido.cliente} pagou com cripto, equivalente a R$${pedido.valor.toFixed(2)}.`);
    };

    
const filtrarPedidos = (pedidos) => {
        return pedidos.filter(pedidos => pedidos.valor > 100)
    }


const processaTipoPagamento = (tipo) => {
    switch (tipo) {
        case "cartao":
            return pagarComCartao
        case "boleto":
            return pagarComBoleto
        case "pix":
            return pagarComPix
        case "cripto":
            return pagarComCripto
        default:
            console.log(`Tipo de pagamento desconhecido para ${pedido.cliente}`);
    }
}   

const processaPedidos = (pedidos) => {
    pedidos.map(pedido => {
        const callback = processaTipoPagamento[pedido.tipo];

        return {
            ...pedido,
            callback
        }
    })
}

const finalizarPedidos = (pedidos) => {
    pedidos.forEach(pedido => {
        pedido.callback(pedido);
    })
}

const pedidosFiltrados = filtrarPedidos(pedidos);

const pedidosProcessados = processaPedidos.map(pedidosFiltrados => {
    return {
        ...pedido
    }
})

console.log("pedidos", pedidos)
console.log(pedidosFiltrados)