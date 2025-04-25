import express from 'express';

const app = express();

let items = [
  {id: 1, nome:"Arroz", marca:"Tio Joao", preco:"6.39"},
  {id: 2, nome:"Feijao", marca:"Caldao", preco:"13.99"},
  {id: 3, nome:"Cafe", marca:"Pilao", preco:"20.99"},
];

app.use(express.json());

app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  const { nome, marca, preco } = req.body;

  const numerosId = items.map(item => {
    return item.id;
  });
  let id = Math.max(...numerosId) + 1;

  items.push({
    id,
    nome,
    marca,
    preco
  })

  res.json({
    mensagem: "Dados recebidos com sucesso!",
    body: { nome, marca, preco }
  });
});

app.delete('/items/:idItem',(req, res) => {

  const {idItem} = req.params;

  console.log("idItem", idItem)

  items = items.filter(item => {
    return item.id != idItem;
  });

  res.json({
    mensagem: "Dado deletado com sucesso!",
  })
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});






