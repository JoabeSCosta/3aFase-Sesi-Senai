import {express} from 'express';

app.use(express.json());

let items = [

    {id: 1, nome: "Arroz", marca: "Tio Joao", preco: "6,39"},
    {id: 2, nome: "Feijão", marca: "Caldao", preco: "13.99"},
    {id: 3, nome: "Macarrão", marca: "Renata", preco: "4.99"},
]

app.get('/items', (req, res) => {
    res.json({mensagem: "Bem-Vindo!"});
});

app.post('/items', (req, res) => {
    const {nome, marca, preco} = req.body;
    let numerosId = items.map(item => item.id);
    let id = Math.max(...numerosId) + 1
    items.push({
        id,
        nome,
        marca,
        preco
    });

    res.json({
        mensagem: "Dados recebidos com sucesso!",
        dados: {nome,marca, preco}
    });
});


app.delete('/items/:idItem', (req, res) => {
    const (idItem) = req.params;

    items.filter(item =>{
        return item.id != idItem
    })

    res.json({
        mensagem: "Dado deletado com sucesso!",
    })
});