import express from 'express';

const app = express();

let alunos = [];
    
app.use(express.json());

function calcularMedia(notas) {
  if (!notas || notas.length !== 4) {
    return {
      sucesso: false,
      mensagem: "O aluno não possui as 4 notas necessárias para calcular a média",
      media: null
    };
  }
  
  const soma = notas.reduce((total, nota) => total + nota, 0);
  const media = Number((soma / 4).toFixed(2));
  
  return {
    sucesso: true,
    mensagem: "Média calculada com sucesso",
    media: media
  };
}

app.get('/alunos', (req, res) => {
  const { status } = req.query; 
  
  let alunosFiltrados = alunos;

  if (status) {
    if (status !== "ativo" && status !== "inativo") {
      return res.status(400).json({
        mensagem: "Status deve ser 'ativo' ou 'inativo'"
      });
    }
    
    alunosFiltrados = alunos.filter(aluno => aluno.status === status);
  }
  const alunosResponse = [];
  alunosFiltrados.forEach(aluno => {
    alunosResponse.push({
      nome: aluno.nome,
      matricula: aluno.matricula,
      status: aluno.status
    });
  });

  if (alunosResponse.length === 0) {
    const mensagem = status 
      ? `Não há alunos com status '${status}' cadastrados`
      : "Não há alunos cadastrados";
    
    return res.status(404).json({
      mensagem
    });
  }

  res.json({
    mensagem: status 
      ? `Alunos com status '${status}'` 
      : "Todos os alunos",
    body: alunosResponse
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
    if (aluno.notas) {
        const resultado = calcularMedia(aluno.notas);
        let situacao; 

        if (resultado.media > 7) {
            situacao = "Aprovado";
        } else if (resultado.media >= 5 && resultado.media <= 7) {
            situacao = "Recuperação";
        } else if (resultado.media < 5) {
            situacao = "Reprovado";
        }

        if (resultado.sucesso) {
            alunosComNotas.push({
                nome: aluno.nome,
                notas: aluno.notas,
                media: resultado.media,
                situação: situacao
            });
        }
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
  
  if (aluno.notas) {
      const resultado = calcularMedia(aluno.notas);
      if (resultado.sucesso) {
          alunoMatriculado.media = resultado.media;
      } else {
          alunoMatriculado.observacao = resultado.mensagem;
      }
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
  console.log("Servidor rodando na porta 3000");
});