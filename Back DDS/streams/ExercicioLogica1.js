const funcionarios = [
    { nome: 'João', idade: 30, salario: 5000, ativo: true },
    { nome: 'Ana', idade: 22, salario: 3200, ativo: false },
    { nome: 'Carlos', idade: 28, salario: 4000, ativo: true },
    { nome: 'Marina', idade: 35, salario: 6000, ativo: false },
    { nome: 'Fernanda', idade: 25, salario: 3800, ativo: true }
];

let resultado = funcionarios.filter(funcionario => funcionario.ativo)
.map(funcionario => ({...funcionario, salario: funcionario.salario * 1.1}));

resultado.forEach(({nome, salario}) => {
    console.log(`Parabéns, ${nome}! Seu novo salário com bônus é R$${salario.toFixed(2)}`);
});

const totalSalarios = resultado.reduce((total, funcionario) => {
    return total + funcionario.salario;
}, 0).toFixed(2);

console.log(`O total de salários dos funcionários ativos é R$${totalSalarios}`);