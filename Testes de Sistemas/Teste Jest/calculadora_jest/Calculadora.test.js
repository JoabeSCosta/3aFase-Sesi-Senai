const Calculadora = require('./classes/Calculadora')

describe("Testes da Calculadora", () => {

    beforeAll(() => {
        // GIVEN - DADO
            calc = new Calculadora()
        })

    test('Deve somar dois números com sucesso ', () => {
      // WHEN - QUANDO
        resultado = calc.somar(2, 3)
      // THEN - ENTÃO
        expect(resultado).toBe(5)
    })

    test('Deve subtrair dois números com sucesso ', () => {
      // WHEN - QUANDO
        resultado = calc.subtrair(5, 3)
      // THEN - ENTÃO
        expect(resultado).toBe(2)
    })

    test('Deve multiplicar dois números com sucesso ', () => {
      // WHEN - QUANDO
        resultado = calc.multiplicar(2, 3)
      // THEN - ENTÃO
        expect(resultado).toBe(6)
    })

    test('Deve dividir dois números com sucesso ', () => {
      // WHEN - QUANDO
        resultado = calc.dividir(6, 3)
      // THEN - ENTÃO
        expect(resultado).toBe(2)
    })
})