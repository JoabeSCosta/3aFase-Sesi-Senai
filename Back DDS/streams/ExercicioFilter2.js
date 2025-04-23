// exercicio 3.2
const nomes = ['Ana Catarina Vasconcelos', 'Marcos Bruno Oliveira Vilsa', 'Amanda Jesus Cristo', 'Carlos Roberto Cabral'];

console.log(nomes.filter(nome => {
    return nome.startsWith("V", nome.lastIndexOf(" ") + 1);
}));