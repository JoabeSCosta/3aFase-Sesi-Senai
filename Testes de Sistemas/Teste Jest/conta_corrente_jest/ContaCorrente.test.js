const ContaCorrente = require('./classes/ContaCorrente');

describe('Testes da classe ContaCorrente', () => {
    let contaMaria, contaJose;

    // Pré-condição: criar duas contas
    beforeEach(() => {
        contaMaria = new ContaCorrente('Maria', 200);
        contaJose = new ContaCorrente('José', 100);
    });

    // Testar se as contas foram criadas corretamente
    test('Contas não devem ser nulas', () => {
        expect(contaMaria).not.toBeNull();
        expect(contaJose).not.toBeNull();
    });

    // Saldo da conta da Maria deve ser diferente da do José
    test('Saldos iniciais devem ser diferentes', () => {
        expect(contaMaria.balanco).not.toBe(contaJose.balanco);
    });

    // Ao realizar um saque de R$100 na conta da Maria, o valor de saldo deve ser igual ao saldo do José
    test('Saque na conta da Maria iguala saldo ao do José', () => {
        contaMaria.sacar(100);
        expect(contaMaria.balanco).toBe(contaJose.balanco);
    });

    // Ao realizar um depósito na conta do José, de R$50, o saldo na sua conta será igual a R$50 a menos o saldo na conta da Maria
    test('Depósito na conta do José deve ser R$50 a menos que Maria', () => {
        contaMaria.sacar(100); // Primeiro igualamos os saldos (Maria fica com 100)
        contaJose.depositar(50); // José passa a ter 150
        expect(contaJose.balanco).toBe(contaMaria.balanco + 50);
    });

    // Testes específicos para Conta Corrente
    describe('Testes de saque', () => {
        // Ao tentar sacar um valor acima do disponível em conta deverá retornar False
        test('Saque acima do saldo deve retornar false', () => {
            expect(contaMaria.sacar(201)).toBe(false);
            expect(contaMaria.balanco).toBe(200); // Saldo não deve mudar
        });

        // Ao tentar sacar um valor disponível, retornar True
        test('Saque dentro do saldo deve retornar true', () => {
            expect(contaMaria.sacar(100)).toBe(true);
            expect(contaMaria.balanco).toBe(100); // Saldo deve ser atualizado
        });
    });
});