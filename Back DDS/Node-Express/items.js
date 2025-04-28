import express from 'express'

const app = express()
app.use(express.json())

const alunos = [

];


app.post('/alunos', (req, res) => {
  const { nome, matricula, status } = req.body
  if (!nome || !matricula) {
    return res.status(400).json({
      mensagem: 'Campo esta faltando',
    });
  }

  if (status !== 'ativo' && status !== 'inativo') {
    return res.status(400).json({
      mensagem: 'Campo status esta incorreto',
    });
  }

  if (alunos.length > 0) {

    console.log('if Rodado')
    const verificaMatricula = alunos.filter((aluno) => aluno.matricula === alunos.matricula)
    if (verificaMatricula) {
      return res.status(400).json({
        mensagem: 'Matrícula já cadastrada',
        matricula: matricula
      });
    }

  }

  alunos.push({
    nome,
    matricula,
    status
  })
  res.json({
    mensagem: 'Dados Recebidos com sucesso',
    body: { nome, matricula, status }
  })
})

app.post('/alunos/:matricula/notas', (req, res) => {
  const { notas } = req.body
  const {matricula} = req.params
  
  if (notas.length != 4) {
    return res.status(400).json({
      mensagem: `Numero de notas obrigatorias é 4 ex: "[1,2,3,4]" `
    })
  }
  const alunoIndex = alunos.findIndex(aluno => aluno.matricula === matricula)
  if (alunoIndex === -1) {
    return res.status(400).json({
      mensagem:`Aluno com a a matricula " ${matricula} " não foi encontrado`
    })
    }else{
      alunos[alunoIndex].notas = notas
    }
    return res.status(200).json({
      mensagem: `Notas Inseridas corretamente ${notas}`,
      body: {
        matricula,
        notas
      }
    })
  
})

app.listen(3000, 'localhost', () => {
  console.log("Servidor rodando em http://localhost:3000");
});