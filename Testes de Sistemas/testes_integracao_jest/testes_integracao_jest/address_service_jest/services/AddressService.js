class AddressService {
    constructor(addressProvider) {
        this.provider = addressProvider;
    }

    obterEndereco(cep) {
        if (!/^\d{8}$/.test(cep)) {
            throw new Error("CEP inválido! Deve conter 8 dígitos numéricos.");
        }

        return this.provider.buscarEnderecoPorCEP(cep);
    }
}

module.exports = AddressService;