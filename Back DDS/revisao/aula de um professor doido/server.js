import fastify from 'fastify';

const servidor = fastify();

const _listaDeUsuarios = []

servidor.get('/', () => {
    return _listaDeUsuarios
})

servidor.post('/rapaiz', (request, reply) => {
    const nome = request.body.nome
    return 'Olá '+nome;
})

servidor.post('/usuario', (request, reply) => {
    const usuario = request.body
    criarUsuario(usuario)
    return 'deu boa'
})

servidor.put('/usuario', (request, reply) => {
    const usuario = request.body
    editarUsuario(usuario)
    return 'deu boa'
})

servidor.delete('/usuario', (request, reply) => {
    const usuario = request.body
    excluirUsuario(usuario)
    return 'deu boa'
})

function excluirUsuario(usuario){
    for (const dadosDoUsuario of _listaDeUsuarios){
        if (dadosDoUsuario.id === usuario.id){
            console.log(dadosDoUsuario)
        }
    }
    //exclui usuario no banco de dados
}

function editarUsuario(usuario){
    for (const dadosDoUsuario of _listaDeUsuarios){
        if (dadosDoUsuario.id === usuario.id){
            console.log(dadosDoUsuario)
        }
    }
    //edita usuario no banco de dados
}

function criarUsuario(usuario){
    _listaDeUsuarios.push(usuario)
    console.log(_listaDeUsuarios);
    //cria usuario no banco de dados
}

servidor.listen({
    port: 3270
})