// CONDICIONAIS

// EXERCÍCIOS PRÁTICOS

// 1:
let hora = 20
if (hora < 12) {
    console.log("Bom Dia")
} else if (hora < 18) {
    console.log("Boa Tarde")
} else {
    console.log("Boa Noite!")
}

// 2:
let mes = 3
switch (mes) {
    case 1:
    console.log("Janeiro")
        break;
    case 2:
        console.log("Fevereiro")
        break;

    case 3:
        console.log("Março")
        break;

    case 4:
        console.log("Abril")
        break;

    case 5:
        console.log("Maio")
        break;

    case 6:
        console.log("Junho")
        break;

    case 7:
        console.log("Julho")
        break;
    
    case 8:
        console.log("Agosto")
        break;

    case 9:
        console.log("Setembro")
        break;

    case 10:
        console.log("Outubro")
        break;

    case 11:
        console.log("Novembro")
        break;

    case 12:
        console.log("Dezembro")
        break;

    default:
        console.log("Número do mês inválido. Tente novamente!")
        break;
}

// 3:
let idade = 16
let dirigir = idade >= 18 ? "Pode dirigir" : "Não pode dirigir"
console.log(dirigir)

// 4:
let saldo = -7
let consultarSaldo = saldo > 0 ? "Saldo Positivo" : "Saldo Negativo" //: "Saldo no 0"
console.log(consultarSaldo)

// 5:
let numero = 5
if (numero > 0) {
    console.log("Positivo")
} else if (numero < 0) {
    console.log("Negativo")
} else {
    console.log("Zero")
}

// 6:
let opcao = 5
switch (opcao) {
    case 1:
        console.log("1 - Sacar")
        break;

    case 2:
        console.log("2 - Depositar")
        break;

    case 3:
        console.log("3 - Saldo")
        break;
    default:
        console.log("Opção inválida, escolha uma opção válida!")
        break;
}