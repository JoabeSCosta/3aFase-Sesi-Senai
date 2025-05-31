const GerenciadorImoveis = require("../classes/GerenciadorImoveis");

describe("Testes de adicionarImovel com mocks e spies", () => {
    test("CEP válido: imóvel adicionado com sucesso e notificação enviada", () => {
        // GIVEN - Dado
        const gerenciador = new GerenciadorImoveis();
        const mockBuscarEnderecoPorCep = jest.spyOn(gerenciador, "buscarEnderecoPorCep");
        mockBuscarEnderecoPorCep.mockReturnValue({
            logradouro: "Rua Felipe Schmidt",
            bairro: "Centro",
            localidade: "Florianópolis",
            uf: "SC"
        });

        const spyEnviarNotificacao = jest.spyOn(gerenciador, "enviarNotificacao");
        spyEnviarNotificacao.mockImplementation(() => {});

        const imovel = {
            id: 1,
            cep: "88010-001",
            endereco: "",
            bairro: "Centro",
            preco: 150000,
            status: "disponível",
            proprietarioId: 101
        };

        // WHEN - Quando
        gerenciador.adicionarImovel(imovel);

        // THEN - Então
        expect(gerenciador.imoveis.length).toBe(1);
        expect(gerenciador.imoveis[0].endereco).toBe("Rua Felipe Schmidt, Centro - Florianópolis/SC");
        expect(mockBuscarEnderecoPorCep).toHaveBeenCalledWith("88010-001");
        expect(spyEnviarNotificacao).toHaveBeenCalledTimes(1);
        expect(spyEnviarNotificacao).toHaveBeenCalledWith(
            101,
            "Seu imóvel em Rua Felipe Schmidt, Centro - Florianópolis/SC foi cadastrado com sucesso!"
        );
    });

    test("Erro inesperado na API de CEP: erro tratado e notificação não enviada", () => {
        // GIVEN - Dado
        const gerenciador = new GerenciadorImoveis();
        const mockBuscarEnderecoPorCep = jest.spyOn(gerenciador, "buscarEnderecoPorCep");
        mockBuscarEnderecoPorCep.mockImplementation(() => {
            throw new Error("Falha na API de CEP");
        });

        const spyEnviarNotificacao = jest.spyOn(gerenciador, "enviarNotificacao");
        spyEnviarNotificacao.mockImplementation(() => {});

        const imovel = {
            id: 2,
            cep: "88010-001",
            endereco: "",
            bairro: "Centro",
            preco: 150000,
            status: "disponível",
            proprietarioId: 102
        };

        // WHEN - Quando / THEN - Então
        expect(() => gerenciador.adicionarImovel(imovel)).toThrow("Falha na API de CEP");
        expect(gerenciador.imoveis.length).toBe(0);
        expect(mockBuscarEnderecoPorCep).toHaveBeenCalledWith("88010-001");
        expect(spyEnviarNotificacao).not.toHaveBeenCalled();
    });

    test("API de CEP retorna endereço vazio: cadastro impedido e notificação não enviada", () => {
        // GIVEN - Dado
        const gerenciador = new GerenciadorImoveis();
        const mockBuscarEnderecoPorCep = jest.spyOn(gerenciador, "buscarEnderecoPorCep");
        mockBuscarEnderecoPorCep.mockReturnValue(null);

        const spyEnviarNotificacao = jest.spyOn(gerenciador, "enviarNotificacao");
        spyEnviarNotificacao.mockImplementation(() => {});

        const imovel = {
            id: 3,
            cep: "88010-001",
            endereco: "",
            bairro: "Centro",
            preco: 150000,
            status: "disponível",
            proprietarioId: 103
        };

        // WHEN - Quando / THEN - Então
        expect(() => gerenciador.adicionarImovel(imovel)).toThrow("Endereço não encontrado para o CEP informado.");
        expect(gerenciador.imoveis.length).toBe(0);
        expect(mockBuscarEnderecoPorCep).toHaveBeenCalledWith("88010-001");
        expect(spyEnviarNotificacao).not.toHaveBeenCalled();
    });
});