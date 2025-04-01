const GeometriaService = require('./classes/GeometriaService');

describe('Testes da classe GeometriaService', () => {
    beforeAll(() => {
        // GIVEN - DADO
        geometria = new GeometriaService();
    });

    test("Deve calcular a área do triângulo corretamente", () => {
        // WHEN - QUANDO
        resultado = geometria.areaTriangulo(2, 2);
        // THEN - ENTÃO
        expect(resultado).toBe(2);
    });

    test("Deve calcular a área de um círculo corretamente", () => {
        // WHEN - QUANDO
        resultado = geometria.areaCircunferencia(2);
        // THEN - ENTÃO
        expect(resultado).toBeCloseTo(12.6, 1); 
    });

    test("Deve calcular a área de um quadrado corretamente", () => {
        // WHEN - QUANDO
        resultado = geometria.areaQuadrado(2);
        // THEN - ENTÃO
        expect(resultado).toBe(4);
    });

    test("Deve calcular a área de um retângulo corretamente", () => {
        // WHEN - QUANDO
        resultado = geometria.areaRetangulo(2, 3);
        // THEN - ENTÃO
        expect(resultado).toBe(6);
    });

    test("Deve calcular o volume de um cubo corretamente", () => {
        // WHEN - QUANDO
        resultado = geometria.volumeCubo(2);
        // THEN - ENTÃO
        expect(resultado).toBe(8);
    });

    test("Deve calcular o volume de um cilindro corretamente", () => {
        // WHEN - QUANDO
        resultado = geometria.volumeCilindro(2, 2);
        // THEN - ENTÃO
        expect(resultado).toBeCloseTo(25.133, 3); 
    });

    test("Deve calcular o volume de uma esfera corretamente", () => {
        // WHEN - QUANDO
        resultado = geometria.volumeEsfera(2);
        // THEN - ENTÃO
        expect(resultado).toBeCloseTo(33.510, 3); 
    });
});