const AgendamentoConsulta = require('../classes/AgendamentoConsulta.js')

describe("Testes de agendamento de Consulta", () =>{
    test("retorne data Valida", () =>{
        // GIVEN - DADO
        const agendamentoConsulta = new AgendamentoConsulta();
        const dataValida = "2025-04-28"
        //WHEN - QUANDO
        const resultado = agendamentoConsulta.dataValida(dataValida)
        //THEN - ENTAO
        expect(resultado).toBe(true)
    })

    test("retorne data Invalida", () =>{
        // GIVEN - DADO
        const agendamentoConsulta = new AgendamentoConsulta();
        const dataInvalida = "2025-04-35"
        //WHEN - QUANDO
        const resultado = agendamentoConsulta.dataValida(dataInvalida)
        //THEN - ENTAO
        expect(resultado).toBe(false)
    })

    test("retorne data futura", () => {
        // GIVEN - DADO
        const agendamentoConsulta = new AgendamentoConsulta();
        const ano = new Data().getFullYear()
        const dataFutura = `${ano + 1}-04-28`
        //WHEN - QUANDO
        const resultado = agendamentoConsulta.dataFutura(dataFutura)
        //THEN - ENTAO
        expect(resultado).toBe(true)
    })

    test("retorne data passada", () => {
        // GIVEN - DADO
        const agendamentoConsulta = new AgendamentoConsulta();
        const ano = new Date().getFullYear();
        const dataPassada = `${ano - 1}-04-28`;
        //WHEN - QUANDO
            const resultado = agendamentoConsulta.dataFutura(dataPassada);
        //THEN - ENTAO
        expect(resultado).toBe(false);
    })

    test("agendamento de consulta valida", () => {
        // GIVEN - DADO
        const agendamentoConsulta = new AgendamentoConsulta();
        const ano = new Date().getFullYear();
        const data = `${ano + 1}-04-28`;
        const paciente = "João Silva";
        //WHEN - QUANDO
        agendamentoConsulta.agendarConsulta(paciente, data);
        const resultado = agendamentoConsulta.listarConsultas();
        //THEN - ENTAO
        expect(resultado.length).toBe(1);
    })

    test("agendamento de consulta com dados invalidos", () => {
        // GIVEN - DADO
        const agendamentoConsulta = new AgendamentoConsulta();
        const paciente = "João Silva";
        const data = "2025-04-35"; // Data inválida
        //WHEN - QUANDO
        expect(() => {
            agendamentoConsulta.agendarConsulta(paciente, data);
        }).toThrow("Data inválida.");
    })


    test("agendamento de consulta com dados faltando", () => {
        // GIVEN - DADO
        const agendamentoConsulta = new AgendamentoConsulta();
        const paciente = "João Silva";
        const data = ""; // Dados faltando
        //WHEN - QUANDO
        expect(() => {
            agendamentoConsulta.agendarConsulta(paciente, data);
        }).toThrow("Paciente e data são obrigatórios.");
    })

    test("cancelar consulta", () => {
        // GIVEN - DADO
        const agendamentoConsulta = new AgendamentoConsulta();
        const ano = new Date().getFullYear();
        const data = `${ano + 1}-04-28`;
        const paciente = "João Silva";
        agendamentoConsulta.agendarConsulta(paciente, data);
        //WHEN - QUANDO
        agendamentoConsulta.cancelarConsulta(paciente);
        const resultado = agendamentoConsulta.listarConsultas();
        //THEN - ENTAO
        expect(resultado.length).toBe(0);
    })

})