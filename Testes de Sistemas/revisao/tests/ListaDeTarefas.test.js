// const ListaDeTarefas = require('../src/ListaDeTarefas');

// describe("Testes de Lista de Tarefas", () => {
//     test("Adicionar tarefa", () => {
//         // GIVEN - DADO
//         const lista = new ListaDeTarefas();
//         const tarefa = "Estudar JavaScript";
//         //WHEN - QUANDO
//         lista.adicionarTarefa(tarefa);
//         //THEN - ENTAO
//         expect(lista.tarefas).toContain(tarefa);
//     });

//     test("Remover tarefa", () => {
//         // GIVEN - DADO
//         const lista = new ListaDeTarefas();
//         const tarefa = "Estudar JavaScript";
//         lista.adicionarTarefa(tarefa);
//         //WHEN - QUANDO
//         lista.removerTarefa(tarefa);
//         //THEN - ENTAO
//         expect(lista.tarefas).not.toContain(tarefa);
//     });

//     test("Listar tarefas", () => {
//         // GIVEN - DADO
//         const lista = new ListaDeTarefas();
//         const tarefa1 = "Estudar JavaScript";
//         const tarefa2 = "Fazer exercícios";
//         lista.adicionarTarefa(tarefa1);
//         lista.adicionarTarefa(tarefa2);
//         //WHEN - QUANDO
//         const tarefas = lista.listarTarefas();
//         //THEN - ENTAO
//         expect(tarefas).toEqual([tarefa1, tarefa2]);
//     });
// });