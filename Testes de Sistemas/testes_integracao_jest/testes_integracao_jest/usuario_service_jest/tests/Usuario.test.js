/* Atividade 1 - Estrutura do Projeto
Classe User: Representa um usuário.
Interface UserRepository: Define métodos para manipular usuários.
Classe UserController: Contém a lógica para adicionar usuários.
Classe de Teste UserServiceTest: Utiliza Mockito para testar a UserService.

Criar testes para:
1. Criar usuário quando não encontrar um igual no banco de dados.
2. Não criar usuário quando encontrar um igual no banco de dados.
Para isso utilize mocks para o repositório de usuário (que faz o papel de
armazenar as informações no banco de dados).
*/

const UsuarioRepository = require('../repositories/UsuarioRepository');
const UsuarioController = require('../controllers/UsuarioController');

describe("UsuarioController", () => {
    test("Usuario criado com sucesso", () => {
      
        let usuarioRepository = new UsuarioRepository();
        let usuarioController = new UsuarioController(usuarioRepository);

        const mockCreate = jest.spyOn(usuarioRepository, "createUsuario")
            .mockImplementation(() => {
                throw new Error( );
            });

        const reqDummy = { body: {} };

        const res = usuarioController.createUsuario(reqDummy);

        expect(res.status).toBe(500);
        expect(res.body).toBe("Não foi possível criar usuário");
        expect(mockCreate).toHaveBeenCalled();
    });

    test("Deve criar usuário com sucesso quando não existir no banco", () => {
        // Configuração
        const usuarioRepository = new UsuarioRepository();
        const usuarioController = new UsuarioController(usuarioRepository);
        
        // Mock do método createUsuario para retornar um usuário
        const mockCreate = jest.spyOn(usuarioRepository, "createUsuario")
            .mockImplementation((data) => ({
                nome: data.nome,
                email: data.email,
                senha: data.senha,
                documento: data.documento
            }));
        
        // Requisição com dados válidos
        const reqValido = { 
            body: {
                nome: "Novo Usuário",
                email: "novo@email.com",
                senha: "senha123",
                documento: "123456789"
            }
        };
        
        // Execução
        const res = usuarioController.createUsuario(reqValido);

        // Verificações
        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('nome', 'Novo Usuário');
        expect(mockCreate).toHaveBeenCalledWith(reqValido.body);
        
        // Limpa o mock após o teste
        mockCreate.mockRestore();
    });
});




