const AddressService = require('../services/AddressService');
const AddressProvider = require('../services/AddressProvider');
const Address = require('../models/Address');

jest.mock('../services/AddressProvider');

describe('AddressService Tests', () => {
    let addressProviderMock;
    let addressService;

    beforeEach(() => {
        addressProviderMock = new AddressProvider();
        addressService = new AddressService(addressProviderMock);
    });

    test('CEP válido e endereço retornado com sucesso', async () => {
        const mockAddress = new Address('12345678', 'Rua Teste', 'Bairro Teste', 'Cidade Teste', 'Estado Teste');
        addressProviderMock.buscarEnderecoPorCEP.mockResolvedValue(mockAddress);

        const result = await addressService.obterEndereco('12345678');
        expect(result).toEqual(mockAddress);
        expect(addressProviderMock.buscarEnderecoPorCEP).toHaveBeenCalledWith('12345678');
    });

    test('CEP válido e endereço não é retornado', async () => {
        addressProviderMock.buscarEnderecoPorCEP.mockRejectedValue(new Error('CEP não encontrado.'));

        await expect(addressService.obterEndereco('87654321')).rejects.toThrow('CEP não encontrado.');
        expect(addressProviderMock.buscarEnderecoPorCEP).toHaveBeenCalledWith('87654321');
    });

    test('CEP inválido', () => {
        expect(() => addressService.obterEndereco('123')).toThrow('CEP inválido! Deve conter 8 dígitos numéricos.');
        expect(() => addressService.obterEndereco('abcdefgh')).toThrow('CEP inválido! Deve conter 8 dígitos numéricos.');
    });

    test('Erro de conexão com API Via CEP', async () => {
        addressProviderMock.buscarEnderecoPorCEP.mockRejectedValue(new Error('Erro ao buscar endereço.'));

        await expect(addressService.obterEndereco('12345678')).rejects.toThrow('Erro ao buscar endereço.');
        expect(addressProviderMock.buscarEnderecoPorCEP).toHaveBeenCalledWith('12345678');
    });
});