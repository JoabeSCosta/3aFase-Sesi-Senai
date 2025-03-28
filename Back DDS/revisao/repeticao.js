const notas = [0,5,8,6,9]

// const resultado = notas.forEach(Element => {
//     console.log("Elemento: ", Element);
//     return Element; 
// });

const resultado = notas.map(Element => {
    let extensao;
    switch (Element) {
        case 0:
            extensao = "zero";
            break;
        case 1:
            extensao = "um";
            break;
        case 2:
            extensao = "dois";
            break;
        case 3:
            extensao = "três";
            break;
        case 4:
            extensao = "quatro";
            break;
        case 5:
            extensao = "cinco";
            break;
        case 6:
            extensao = "seis";
            break;
        case 7:
            extensao = "sete";
            break;
        case 8:
            extensao = "oito";
            break;
        case 9:
            extensao = "nove";
            break;
        default:
            extensao = "número inválido";
            break;
    }
    console.log("Elemento: ", Element, " - ", extensao);
    return Element 
});

// const resultado = notas.reduce(Element => {
//     console.log("Elemento: ", Element);
//     return Element; 
// });

// const resultado = notas.filter(Element => {
//     console.log("Elemento: ", Element);
//     return Element; 
// });

