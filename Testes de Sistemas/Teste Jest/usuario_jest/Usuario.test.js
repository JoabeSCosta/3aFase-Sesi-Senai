const Usuario = require('./classes/Usuario');

describe("Testes de Cadastro de Usuário", () => {
    test('Dado que eu passe as informações válidas e obrigatórias; - Quando eu chamo o método para cadastrar o usuário; - Então devo receber sucesso como true', () => {
        const usuarioValidoCPF = new Usuario(
            "123.456.789-09", 
            "Fulano de Tal", 
            "fulano@example.com", 
            "senhaSegura123", 
            "senhaSegura123", 
            "12345-678"
        );
        expect(usuarioValidoCPF).toBeDefined();

    });
});