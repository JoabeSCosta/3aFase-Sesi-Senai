import express from 'express';

const app = express();

let alunos = []
    
app.use(express.json());

app.get('/alunos', (req, res) => {
  const alunosAtivos = [];

  alunos.forEach(aluno => {
    if (aluno.status === "ativo") {
      alunosAtivos.push({
        nome: aluno.nome,
        matricula: aluno.matricula
      });
    }
  });

  if (alunosAtivos.length === 0) {
    return res.status(404).json({
        mensagem: "Não tem alunos ativos cadastrados",
        body: []
    });
}

  res.json({
    mensagem: "Todos os alunos Ativos",
    body: alunosAtivos
  });
});

app.get('/alunos/inativos', (req, res) => {
  const alunosInativos = [];

  alunos.forEach(aluno => {
    if (aluno.status === "inativo") {
      alunosInativos.push({
        nome: aluno.nome,
        matricula: aluno.matricula
      });
    }
  });

  if (alunosInativos.length === 0) {
    return res.status(404).json({
        mensagem: "Não tem alunos inativos cadastrados",
        body: []
    });
}

  res.json({
    mensagem: "Todos os alunos Inativos",
    body: alunosInativos
  });
});

  app.post('/alunos', (req, res) => {
    const { nome, matricula, status } = req.body;
  
    if(!nome || !matricula){
      return res.status(400).json({
        mensagem: "Campo esta faltando"
      })
    }

    if(status !== "ativo" && status !== "inativo"){
      return res.status(400).json({
        mensagem: "Campo status esta incorreto"
      })
    }

    const verificamatricula = alunos.filter((aluno) => aluno.matricula === matricula);
    if (verificamatricula.length > 0) {
      return res.status(400).json({
        mensagem: "Matricula já cadastrada",
        matricula: matricula
      });
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
  
  app.post('/alunos/:matricula/notas', (req, res) => {
    const { notas } = req.body
    const {matricula} = req.params
    
    if (notas.length != 4) {
      return res.status(400).json({
        mensagem: `Numero de notas obrigatorias é 4" `
      })
    }
    const alunoEncontrado = alunos.findIndex(aluno => aluno.matricula === matricula)
    if (alunoEncontrado === -1) {
      return res.status(400).json({
        mensagem:`Aluno com a matricula: " ${matricula} " não foi encontrado`
      })
      }else{
        alunos[alunoEncontrado].notas = notas
      }
      return res.status(200).json({
        mensagem: `Notas Inseridas corretamente ${notas}`,
        body: {
          matricula,
          notas
        }
      })
    
  })

  app.get('/alunos/notas', (req, res) => {
    const alunosComNotas = [];

    alunos.forEach(aluno => {
        if (aluno.notas && aluno.notas.length === 4) {
 
            const soma = aluno.notas[0] + aluno.notas[1] + aluno.notas[2] + aluno.notas[3];
            const mediaCalculada = soma / 4;

            const mediaFormatada = Number(mediaCalculada.toFixed(2));

            alunosComNotas.push({
                nome: aluno.nome,
                notas: aluno.notas,
                media: mediaFormatada 
            });
        }
    });

    if (alunosComNotas.length === 0) {
        return res.status(404).json({ mensagem: "Nenhum aluno com notas cadastrado" });
    }

    res.json(alunosComNotas);
});

app.get('/alunos/:matricula', (req, res) => {
  const { matricula } = req.params;

  const alunoIndex = alunos.findIndex(aluno => aluno.matricula === matricula);
  
  if (alunoIndex === -1) {
      return res.status(404).json({
          mensagem: `Aluno com matrícula ${matricula} não encontrado`
      });
  }
  
  const aluno = alunos[alunoIndex];
  
  const alunoMatriculado = {
      nome: aluno.nome,
      matricula: aluno.matricula,
      status: aluno.status
  };
  
  if (aluno.notas && aluno.notas.length === 4) {
      const soma = aluno.notas[0] + aluno.notas[1] + aluno.notas[2] + aluno.notas[3];
      const mediaCalculada = soma / 4;
      alunoMatriculado.media = Number(mediaCalculada.toFixed(2)); 
  }

  res.json({
      mensagem: "Aluno encontrado com sucesso",
      body: alunoMatriculado
  });
});

  app.delete('/alunos/:matricula', (req, res) => {
    const { matricula } = req.params;

    const alunoEncontrado = alunos.findIndex(aluno => aluno.matricula === matricula);
    if (alunoEncontrado === -1) {
        return res.status(404).json({
            mensagem: `Aluno com matrícula ${matricula} não encontrado`
        });
    }

    alunos = alunos.filter(aluno => aluno.matricula !== matricula);
    
    res.json({
        mensagem: "Aluno deletado com sucesso!",
        matricula: matricula
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });