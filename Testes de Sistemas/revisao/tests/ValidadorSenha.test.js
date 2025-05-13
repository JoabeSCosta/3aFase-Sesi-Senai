// const ValidadorSenha = require('../classes/ValidadorSenha');

// describe("Testes de Validador de Senha", () => {
//     test("Senha válida", () => {
//         // GIVEN - DADO
//         const senha = "SenhaForte123!";
//         const validador = new ValidadorSenha();
//         //WHEN - QUANDO
//         const resultado = validador.validar(senha);
//         //THEN - ENTAO
//         expect(resultado).toBe(true);
//     });

//     test("Senha inválida (sem número)", () => {
//         // GIVEN - DADO
//         const senha = "SenhaForte!";
//         const validador = new ValidadorSenha();
//         //WHEN - QUANDO
//         const resultado = validador.validar(senha);
//         //THEN - ENTAO
//         expect(resultado).toBe(false);
//     });

//     test("Senha inválida (sem letra maiúscula)", () => {
//         // GIVEN - DADO
//         const senha = "senhaForte123!";
//         const validador = new ValidadorSenha();
//         //WHEN - QUANDO
//         const resultado = validador.validar(senha);
//         //THEN - ENTAO
//         expect(resultado).toBe(false);
//     });

//     test("Senha inválida (sem caractere especial)", () => {
//         // GIVEN - DADO
//         const senha = "SenhaForte123";
//         const validador = new ValidadorSenha();
//         //WHEN - QUANDO
//         const resultado = validador.validar(senha);
//         //THEN - ENTAO
//         expect(resultado).toBe(false);
//     });

// });