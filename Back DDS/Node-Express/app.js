import express from 'express';

const app = express();

let alunos = []
    
app.use(express.json());

app.get('/alunos', (req, res) => {
    res.json(alunos);
  });

  app.post('/alunos', (req, res) => {
    const { nome, matricula, status } = req.body;
  
    if(!nome || !matricula){
      return res.status(400).json({
        mensagem: "Campo esta faltando"
      })
    }

    if(status !== "ativo" && status !== "negativo"){
      return res.status(400).json({
        mensagem: "Campo status esta incorreto"
      })
    }

    if (alunos.length > 0){
      const verificamatricula = alunos.filter((aluno) => aluno.matricula === alunos.matricula)
      if (verificamatricula){
        return res.status(400).json({
          mensagem: "Matricula já cadastrada",
          matricula: matricula
        })
      }
    }

    alunos.push({
      nome,
      matricula,
      status
    })
  
    res.json({
      mensagem: "Novo Aluno Cadastrado com sucesso",
      body: { nome, matricula, status }
    });
  });
  
  app.post('/alunos/notas', (req, res) => {
    const { nome, matricula, status } = req.body;
  })

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });