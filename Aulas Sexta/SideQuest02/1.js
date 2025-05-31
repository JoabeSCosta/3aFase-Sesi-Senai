//Verificando a idade: Peça ao usuário sua idade e, em seguida, exiba uma mensagem que diga se ele é maior de idade ou menor de idade.

let idade = Number(prompt('Você é maior de idade? Digite sua idade:'))
if (idade >= 18) {
    alert(`Você tem ${idade} anos, você é maior de idade 😁`)
} else {
    alert(`Você tem ${idade} anos, você é menor de idade 😒`)
}

//Jogo de Adivinhação: Crie um número aleatório entre 1 e 10. Peça ao usuário para adivinhar o número e, em seguida, diga se eles acertaram ou não.

let NumeroAleatorio = Math.floor(Math.random() * 10) + 1;
let adivinhar = Number(prompt(`Adivinhe o numero de 1 a 10
    Digite o numero:`))
if (NumeroAleatorio === adivinhar) {
    alert(`Você acertou o numero aletorio é ${NumeroAleatorio}, parabéns 🤲`)
} else {
    alert(`Você errou o numero aletorio era ${NumeroAleatorio}, mais sorte na proxima 😟`)
}

//Dia da Semana: Peça ao usuário que insira um número de 1 a 7 e, em seguida, mostre o dia da semana correspondente (por exemplo, 1 = Domingo, 2 = Segunda, etc.).

let NumeroSemanal = Number(prompt(`Digite um numero para saber qual dia da semana é:`))

switch (NumeroSemanal) {
    case 1:
        alert(`O dia ${NumeroSemanal} é Domingo`)
        break;
    case 2:
        alert(`O dia ${NumeroSemanal} é Segunda`)
        break;
    case 3:
        alert(`O dia ${NumeroSemanal} é Terça`)
        break;
    case 4:
        alert(`O dia ${NumeroSemanal} é Quarta`)
        break;
    case 5:
        alert(`O dia ${NumeroSemanal} é Quinta`)
        break;
    case 6:
        alert(`O dia ${NumeroSemanal} é Sexta`)
        break;
    case 7:
        alert(`O dia ${NumeroSemanal} é Sabado`)
        break;
    default:
        alert('Apenas numeros de 1 a 7')
        break;
}

//Verificando Números Pares: Peça ao usuário para inserir um número e, em seguida, determine se é par ou ímpar.

let numeroImparOuPar = Number(prompt(`Digite um numero para ver se é impar ou par:`))

if (numeroImparOuPar = 2 % 0) {
    
}