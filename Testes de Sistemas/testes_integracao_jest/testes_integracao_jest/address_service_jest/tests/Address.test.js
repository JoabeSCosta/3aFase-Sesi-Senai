// tests/address.test.js
const AddressProvider = require('../services/AddressProvider');
const AddressService = require('../services/AddressService');

describe('Testes do AddressService', () => {
    let addressService;
    let addressProvider;
    let endDummy;

    beforeEach(() => {
        addressProvider = new AddressProvider();
        addressService = new AddressService(addressProvider);
    
        endDummy = {
            cep: '12345-678',
            logradouro: 'Rua Exemplo',
            bairro: 'Centro',
            localidade: 'São Paulo',
            uf: 'SP'
        };
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('CEP válido e endereço retornado com sucesso', async () => {

        const cepDummy = '12345678';
        jest.spyOn(addressProvider, 'buscarEnderecoPorCEP').mockResolvedValue(endDummy);
        
        const resultado = await addressService.obterEndereco(cepDummy);
        
        expect(addressProvider.buscarEnderecoPorCEP).toHaveBeenCalledWith(cepDummy);
        expect(resultado).toEqual(endDummy);
    });

    it('CEP válido e endereço não encontrado', async () => {

        const cepDummy = '12345678';
        jest.spyOn(addressProvider, 'buscarEnderecoPorCEP').mockResolvedValue({ erro: true });

        const resultado = await addressService.obterEndereco(cepDummy);

        expect(resultado).toEqual({ erro: true });
    });

    it('CEP inválido deve lançar exceção', () => {

        const cepInvalido = '1234';
        
        expect(() => addressService.obterEndereco(cepInvalido))
            .toThrow("CEP inválido! Deve conter 8 dígitos numéricos.");
    });

    it('Erro de conexão com API ViaCEP', async () => {

        const cepDummy = '12345678';
        jest.spyOn(addressProvider, 'buscarEnderecoPorCEP')
            .mockRejectedValue(new Error("Erro ao conectar com a API ViaCEP"));

        await expect(addressService.obterEndereco(cepDummy))
            .rejects.toThrow("Erro ao conectar com a API ViaCEP");
    });
});