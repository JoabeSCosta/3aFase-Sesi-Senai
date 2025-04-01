const ContaCorrente = require('./classes/ContaCorrente');

describe('Testes da classe ContaCorrente', () => {
    let contaMaria, contaJose;

    beforeAll(() => {
        contaMaria = new ContaCorrente('Maria', 200);
        contaJose = new ContaCorrente('José', 100);
    });

    test("Criação de contas", () => {
        expect(contaMaria).toBeDefined();
        expect(contaJose).toBeDefined();
    });

    test('Contas não devem ser nulas', () => {
        expect(contaMaria).not.toBeNull();
        expect(contaJose).not.toBeNull();
    });

    test('Saldos iniciais devem ser diferentes', () => {
        expect(contaMaria.balanco).not.toBe(contaJose.balanco);
    });

    test('Saque na conta da Maria iguala saldo ao do José', () => {
        contaMaria.sacar(100);
        expect(contaMaria.balanco).toBe(contaJose.balanco);
    });

    test('Depósito na conta do José deve ser R$50 a menos que Maria', () => {
        contaMaria.sacar(100);
        contaJose.depositar(50);
        expect(contaJose.balanco).toBe(contaMaria.balanco + 50);
    });

    describe('Testes de saque', () => {

        test('Saque acima do saldo deve retornar false', () => {
            expect(contaMaria.sacar(201)).toBe(false);
            expect(contaMaria.balanco).toBe(200); 
        });

        test('Saque dentro do saldo deve retornar true', () => {
            expect(contaMaria.sacar(100)).toBe(true);
            expect(contaMaria.balanco).toBe(100); 
        });
    });
});