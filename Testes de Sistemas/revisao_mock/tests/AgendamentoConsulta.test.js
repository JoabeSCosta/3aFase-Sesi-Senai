const AgendamentoConsulta = require("../classes/AgendamentoConsulta");

//npm install --save-dev @types/jest

describe("Testes de Agendamento de Consultas", () => {
    
    test("Agendamento com CRM do médico válido", () => {
        // GIVEN - Dado
        const agendamento = new AgendamentoConsulta();
        const crm = "12345";
        const paciente = "Paciente 1";
        const proximoAno = new Date().getFullYear() + 1;
        const data = `${proximoAno}-05-05`;

        const mockValidaMedico = jest.spyOn(agendamento, "validaMedico");
        mockValidaMedico.mockReturnValue(true);

        const spyDataValida = jest.spyOn(agendamento, "dataValida");
        const spyDataFutura = jest.spyOn(agendamento, "dataFutura");

        // WHEN - Quando (Ação)
        agendamento.agendarConsulta(crm, paciente, data);
        const listaConsultas = agendamento.listarConsultas();

        // THEN - Então (resultado)
        expect(listaConsultas.length).toBe(1);
        expect(mockValidaMedico).toHaveBeenCalledWith(crm);
        expect(spyDataValida).toHaveBeenCalledTimes(1);
        expect(spyDataFutura).toHaveBeenCalledTimes(1);
    });

    test("Agendamento com CRM do médico inválido", () => {
        // GIVEN - Dado
        const agendamento = new AgendamentoConsulta();
        const crm = "12345";
        const paciente = "Paciente 1";
        const proximoAno = new Date().getFullYear() + 1;
        const data = `${proximoAno}-05-05`;

        const mockValidaMedico = jest.spyOn(agendamento, "validaMedico");
        mockValidaMedico.mockReturnValue(false);

        // WHEN - Quando (Ação)
        expect(() => agendamento.agendarConsulta(crm, paciente, data)).toThrow("Médico inválido");

        const listaConsultas = agendamento.listarConsultas();

        // THEN - Então (resultado)
        expect(listaConsultas.length).toBe(0);
        expect(mockValidaMedico).toHaveBeenCalledWith(crm);
    });

    test("Agendamento com sistema do CRM offiline", () => {
        // GIVEN - Dado
        const agendamento = new AgendamentoConsulta();
        const crm = "12345";
        const paciente = "Paciente 1";
        const proximoAno = new Date().getFullYear() + 1;
        const data = `${proximoAno}-05-05`;

        const mockValidaMedico = jest.spyOn(agendamento, "validaMedico");
        mockValidaMedico.mockImplementation(() => {throw new Error("CRM fora do Ar")})

        // WHEN - Quando (Ação)
        expect(() => agendamento.agendarConsulta(crm, paciente, data)).toThrow("CRM fora do Ar");

        const listaConsultas = agendamento.listarConsultas();

        // THEN - Então (resultado)
        expect(listaConsultas.length).toBe(0);
        expect(mockValidaMedico).toHaveBeenCalledWith(crm);
    });
});