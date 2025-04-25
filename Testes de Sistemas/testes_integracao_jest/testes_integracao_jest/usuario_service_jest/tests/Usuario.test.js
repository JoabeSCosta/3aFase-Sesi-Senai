const UsuarioRepository = require('../repositories/UsuarioRepository')
const UsuarioController = require('../controllers/UsuarioController')

describe('Testes de UsuarioService', () => {
    beforeAll(() => {
         userRepo = new UsuarioRepository()
         userControl = new UsuarioController()
         userDammy = ""
    })
    it('usuario nao encontrado no banco', () => {

        const mockRepos = jest.spyOn(userRepo,'createUsuario').mockReturnValue(userDammy)

        const resultado = userRepo.createUsuario(userDammy)

        expect(resultado)

    })
    it('usuario encontrado no banco', () => {

        const mockRepos = jest.spyOn(userRepo,'createUsuario').mockImplementation(() => {throw new Error("Usuário já existe")})

        expect(() => userRepo.createUsuario(userDammy)).toThrow("Usuário já existe");

    })
    
})