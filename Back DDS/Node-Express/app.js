// import express from 'express';
// import {Client} from 'pg';

// //postgresql://joabescosta:JvvyrImdG5hQ8h6NjcMUVuh9R357zGy3@dpg-d0ek9u95pdvs73apgn8g-a.oregon-postgres.render.com/escola_dev_sp9d

// // TODO: Conexao postgres
// const client = new Client({
//   user: 'joabescosta',
//   host: 'dpg-d0ek9u95pdvs73apgn8g-a.oregon-postgres.render.com',
//   database: 'escola_dev_sp9d',
//   password: 'JvvyrImdG5hQ8h6NjcMUVuh9R357zGy3',
//   port: 3306
// });

// client.connect()
//   .then(() => console.log("Conectado com sucesso!"))
//   .catch(err => console.error("Erro ao conectar: ", err.stack));

// const app = express();

// let items = [
//   {id: 1, nome:"Arroz", marca:"Tio Joao", preco:"6.39"},
//   {id: 2, nome:"Feijao", marca:"Caldao", preco:"13.99"},
//   {id: 3, nome:"Cafe", marca:"Pilao", preco:"20.99"},
// ];

// app.use(express.json());

// <<<<<<< HEAD
// app.get('/items', (req, res) => {
//   res.json(items);
// });

// app.post('/items', (req, res) => {
//   const { nome, marca, preco } = req.body;

//   const numerosId = items.map(item => {
//     return item.id;
//   });
//   let id = Math.max(...numerosId) + 1;

//   items.push({
//     id,
//     nome,
//     marca,
//     preco
//   })

//   res.json({
//     mensagem: "Dados recebidos com sucesso!",
//     body: { nome, marca, preco }
//   });
// });

// app.delete('/items/:idItem',(req, res) => {
// app.delete('/items/:idItem', (req, res) => {
//   const { idItem } = req.params;

//   console.log("idItem", idItem);

//   items = items.filter(item => {
//     return item.id != idItem;
//   });

//   res.json({
//     mensagem: "Dado deletado com sucesso!"
//   });
// });

// function calcularMedia(notas) {
//   const soma = notas.reduce((total, nota) => total + nota, 0);
//   const media = soma / 4;

//   let situacao;
//   if (media >= 7) situacao = "aprovado";
//   else if (media >= 5) situacao = "recuperacao";
//   else situacao = "reprovado";

//   return {
//     media: media,
//     situacao: situacao
//   };
// }
// app.get('/alunos', (req, res) => {
//   const { status } = req.query;
  
//   let alunosFiltrados = alunos;
  
//   if (status) {
//     if (status !== "ativo" && status !== "inativo") {
//       return res.status(400).json({ 
//         erro: "O campo 'status' deve ser 'ativo' ou 'inativo'." 
//       });
//     }
//     alunosFiltrados = alunos.filter(aluno => aluno.status === status);
//   }

//   const resposta = alunosFiltrados.map(aluno => ({
//     nome: aluno.nome,
//     matricula: aluno.matricula,
//     status: aluno.status,
//     dataCriacao: aluno.dataCriacao
//   }));
  
//   res.status(200).json(resposta);
// });

// app.post('/alunos', (req, res) => {
//   const { nome, matricula, status } = req.body;
  
//   if (!nome) return res.status(400).json({ erro: "O campo 'nome' é obrigatório." });
//   if (!matricula) return res.status(400).json({ erro: "O campo 'matricula' é obrigatório." });
//   if (!status) return res.status(400).json({ erro: "O campo 'status' é obrigatório." });
  
//   if (nome.length < 3) return res.status(400).json({ erro: "O nome deve conter pelo menos 3 caracteres." });
//   if (status !== "ativo" && status !== "inativo") {
//     return res.status(400).json({ erro: "O campo 'status' deve ser 'ativo' ou 'inativo'." });
//   }
  
//   const matriculaExiste = alunos.some(
//     aluno => aluno.matricula.toLowerCase() === matricula.toLowerCase()
//   );
//   if (matriculaExiste) return res.status(409).json({ erro: "Já existe um aluno com essa matrícula." });

//   const novoAluno = {
//     nome,
//     matricula,
//     status,
//     dataCriacao: new Date()
//   };
  
//   alunos.push(novoAluno);
  
//   res.status(201).json({ mensagem: "Aluno cadastrado com sucesso." });
// });

// app.post('/alunos/:matricula/notas', (req, res) => {
//   const { notas } = req.body;
//   const { matricula } = req.params;

//   if (!notas) {
//     return res.status(400).json({
//       erro: "O campo 'notas' é obrigatório e deve ser um array de 4 números."
//     });
//   }

//   if (!notas.length || notas.length !== 4) {
//     return res.status(400).json({
//       erro: "Devem ser fornecidas exatamente 4 notas."
//     });
//   }

//   const alunoIndex = alunos.findIndex(aluno => aluno.matricula === matricula);
  
//   if (alunoIndex === -1) {
//     return res.status(404).json({
//       erro: "Aluno não encontrado."
//     });
//   }

//   if (alunos[alunoIndex].status === 'inativo') {
//     return res.status(403).json({
//       erro: "Não é possível cadastrar notas para alunos inativos."
//     });
//   }

//   for (const nota of notas) {
//     if (isNaN(nota) || nota < 0 || nota > 10) {
//       return res.status(400).json({
//         erro: "As notas devem ser números entre 0 e 10."
//       });
//     }
//   }

//   alunos[alunoIndex].notas = notas.map(Number); 
//   alunos[alunoIndex].dataAlteracao = new Date();

//   return res.status(200).json({
//     mensagem: "Notas cadastradas com sucesso.",
//     notas: notas
//   });
// });

// app.get('/alunos/notas', (req, res) => {

//   const alunosComNotas = alunos
//     .filter(aluno => aluno.status === "ativo" && aluno.notas)
//     .map(aluno => {
//       const { media, situacao } = calcularMedia(aluno.notas);
//       return {
//         nome: aluno.nome,
//         matricula: aluno.matricula,
//         notas: aluno.notas,
//         media,
//         situacao
//       };
//     });
  
//   res.status(200).json(alunosComNotas);
// });

// app.get('/alunos/:matricula', (req, res) => {
//   const { matricula } = req.params;
  
//   const aluno = alunos.find(aluno => aluno.matricula === matricula);
//   if (!aluno) return res.status(404).json({ erro: "Aluno não encontrado." });

//   const resposta = {
//     nome: aluno.nome,
//     matricula: aluno.matricula,
//     status: aluno.status,
//     dataCriacao: aluno.dataCriacao
//   };

//   if (aluno.notas) {
//     const { media, situacao } = calcularMedia(aluno.notas);
//     resposta.notas = aluno.notas;
//     resposta.media = media;
//     resposta.situacao = situacao;
//     resposta.dataAlteracao = aluno.dataAlteracao;
//   }
  
//   res.status(200).json(resposta);
// });

// app.delete('/alunos/:matricula', (req, res) => {
//   const matricula = req.params.matricula
//   const index = alunos.findIndex(aluno => aluno.matricula === matricula)
//   if (index == -1) {
//     return res.status(404).json({
//       mensagem: `Aluno não encontrado.`
//     })
//   }
//   alunos[index].status = 'inativo'

//   res.status(200).json({
//     mensagem: `Aluno removido com sucesso.`
//   })
// })

// app.listen(3000, () => {
//   console.log('Servidor rodando na porta 3000');
// });