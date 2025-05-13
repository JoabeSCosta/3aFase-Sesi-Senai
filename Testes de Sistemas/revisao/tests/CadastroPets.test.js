// const CadastroPets = require('../classes/CadastroPets');

// describe("Testes de Cadastro de Pets", () => {
//     test("cadastro de pet valido", () => {
//         // GIVEN - DADO
//         const cadastroPets = new CadastroPets();
//         const nomePet = "Rex";
//         const tipoPet = "Cachorro";
//         const idadePet = 5;
//         //WHEN - QUANDO
//         cadastroPets.cadastrarPet(nomePet, tipoPet, idadePet);
//         const resultado = cadastroPets.listarPets();
//         //THEN - ENTAO
//         expect(resultado.length).toBe(1);
//     });

//     test("cadastro de pet com dados invalidos", () => {
//         // GIVEN - DADO
//         const cadastroPets = new CadastroPets();
//         const nomePet = "";
//         const tipoPet = "Cachorro";
//         const idadePet = 5;
//         //WHEN - QUANDO
//         cadastroPets.cadastrarPet(nomePet, tipoPet, idadePet);
//         const resultado = cadastroPets.listarPets();
//         //THEN - ENTAO
//         expect(resultado.length).toBe(0);
//     });

//     test("cadastro de pet com idade negativa", () => {
//         // GIVEN - DADO
//         const cadastroPets = new CadastroPets();
//         const nomePet = "Rex";
//         const tipoPet = "Cachorro";
//         const idadePet = -5;
//         //WHEN - QUANDO
//         cadastroPets.cadastrarPet(nomePet, tipoPet, idadePet);
//         const resultado = cadastroPets.listarPets();
//         //THEN - ENTAO
//         expect(resultado.length).toBe(0);
//     });

//     test("cadastro de pet com tipo invalido", () => {
//         // GIVEN - DADO
//         const cadastroPets = new CadastroPets();
//         const nomePet = "Rex";
//         const tipoPet = "Dino";
//         const idadePet = 5;
//         //WHEN - QUANDO
//         cadastroPets.cadastrarPet(nomePet, tipoPet, idadePet);
//         const resultado = cadastroPets.listarPets();
//         //THEN - ENTAO
//         expect(resultado.length).toBe(0);
//     });

    
// });