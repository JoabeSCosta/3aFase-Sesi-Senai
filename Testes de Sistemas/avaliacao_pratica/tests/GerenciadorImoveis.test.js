const GerenciadorImoveis = require('../classes/GerenciadorImoveis.js');

describe("Testes de Gerenciador de Imóveis", () => {
    test("Adicionar imóvel válido", () => {
        // GIVEN - DADO
        const gerenciador = new GerenciadorImoveis();
        const imovel1 = {
            id: 1,
            cep: "88010-001",
            endereco: "Rua das Flores, 123",
            bairro: "Centro",
            preco: 150000,
            status: "disponível",
            proprietarioId: 101
        };

        // WHEN - QUANDO
        gerenciador.adicionarImovel(imovel1);

        // THEN - ENTÃO
        expect(gerenciador.imoveis.length).toBe(1);
        expect(gerenciador.imoveis[0]).toEqual(imovel1);
    });

    test("Não adicionar imóvel com endereço inválido", () => {
        // GIVEN - DADO
        const gerenciador = new GerenciadorImoveis();
        const imovelInvalido = {
            id: 2,
            cep: "88010-001",
            endereco: "", // Endereço inválido
            bairro: "Centro",
            preco: 150000,
            status: "disponível",
            proprietarioId: 102
        };

        // WHEN - QUANDO / THEN - ENTÃO
        expect(() => {
            gerenciador.adicionarImovel(imovelInvalido);
        }).toThrow("Endereço inválido.");
    });

    test("Não adicionar imóvel com bairro inválido", () => {
        // GIVEN - DADO
        const gerenciador = new GerenciadorImoveis();
        const imovelInvalido = {
            id: 3,
            cep: "88010-001",
            endereco: "Rua Felipe Schmidt",
            bairro: "", // Bairro inválido
            preco: 150000,
            status: "disponível",
            proprietarioId: 103
        };

        // WHEN - QUANDO / THEN - ENTÃO
        expect(() => {
            gerenciador.adicionarImovel(imovelInvalido);
        }).toThrow("Bairro inválido.");
    });

    test("Não adicionar imóvel com preço inválido", () => {
        // GIVEN - DADO
        const gerenciador = new GerenciadorImoveis();
        const imovelInvalido = {
            id: 3,
            cep: "88010-002",
            endereco: "Rua das Palmeiras, 456",
            bairro: "Trindade",
            preco: -100, // Preço inválido
            status: "disponível",
            proprietarioId: 103
        };

        // WHEN - QUANDO / THEN - ENTÃO
        expect(() => {
            gerenciador.adicionarImovel(imovelInvalido);
        }).toThrow("Preço inválido. Deve ser um número maior que zero.");
    });

    test("Não adicionar imóvel com status inválido", () => {
        // GIVEN - DADO
        const gerenciador = new GerenciadorImoveis();
        const imovelInvalido = {
            id: 4,
            cep: "88010-003",
            endereco: "Rua das Acácias, 789",
            bairro: "Centro",
            preco: 200000,
            status: "pendente", // Status inválido
            proprietarioId: 104
        };

        // WHEN - QUANDO / THEN - ENTÃO
        expect(() => {
            gerenciador.adicionarImovel(imovelInvalido);
        }).toThrow("Status inválido. Deve ser 'disponível' ou 'indisponível'.");
    });

    test("Buscar imóveis por bairro existente", () => {
        // GIVEN - DADO
        const gerenciador = new GerenciadorImoveis();
        const imovel1 = {
            id: 1,
            cep: "88010-001",
            endereco: "Rua das Flores, 123",
            bairro: "Centro",
            preco: 150000,
            status: "disponível",
            proprietarioId: 101
        };
        const imovel2 = {
            id: 2,
            cep: "88020-002",
            endereco: "Rua das Palmeiras, 456",
            bairro: "Trindade",
            preco: 200000,
            status: "disponível",
            proprietarioId: 102
        };
        gerenciador.adicionarImovel(imovel1);
        gerenciador.adicionarImovel(imovel2);

        // WHEN - QUANDO
        const resultado = gerenciador.buscarImoveisPorBairro("Centro");

        // THEN - ENTÃO
        expect(resultado.length).toBe(1);
        expect(resultado[0]).toEqual(imovel1);
    });

    test("Buscar imóveis por bairro inexistente", () => {
        // GIVEN - DADO
        const gerenciador = new GerenciadorImoveis();
        const imovel1 = {
            id: 1,
            cep: "88010-001",
            endereco: "Rua das Flores, 123",
            bairro: "Centro",
            preco: 150000,
            status: "disponível",
            proprietarioId: 101
        };
        gerenciador.adicionarImovel(imovel1);

        // WHEN - QUANDO
        const resultado = gerenciador.buscarImoveisPorBairro("Trindade");

        // THEN - ENTÃO
        expect(resultado.length).toBe(0);
    });

    test("Listar imóveis disponíveis", () => {
        // GIVEN - DADO
        const gerenciador = new GerenciadorImoveis();
        const imovel1 = {
            id: 1,
            cep: "88010-001",
            endereco: "Rua das Flores, 123",
            bairro: "Centro",
            preco: 150000,
            status: "disponível",
            proprietarioId: 101
        };
        const imovel2 = {
            id: 2,
            cep: "88020-002",
            endereco: "Rua das Palmeiras, 456",
            bairro: "Trindade",
            preco: 200000,
            status: "indisponível",
            proprietarioId: 102
        };
        gerenciador.adicionarImovel(imovel1);
        gerenciador.adicionarImovel(imovel2);

        // WHEN - QUANDO
        const resultado = gerenciador.listarImoveisDisponiveis()

        // THEN - ENTÃO
        expect(resultado.length).toBe(1);
        expect(resultado[0]).toEqual(imovel1);
    });

    test("Não listar imóveis quando nenhum está disponível", () => {
        // GIVEN - DADO
        const gerenciador = new GerenciadorImoveis();
        const imovel1 = {
            id: 1,
            cep: "88010-001",
            endereco: "Rua das Flores, 123",
            bairro: "Centro",
            preco: 150000,
            status: "indisponível",
            proprietarioId: 101
        };
        gerenciador.adicionarImovel(imovel1);

        // WHEN - QUANDO
        const resultado = gerenciador.listarImoveisDisponiveis()

        // THEN - ENTÃO
        expect(resultado.length).toBe(0);
    });
});