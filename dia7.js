// FUNÇÕES

// EXERCÍCIOS PRÁTICOS

// 1:
let dobroNumero = (numero) => {
    return numero * 2
}
console.log(dobroNumero(10))

// 2:
let boasVindas = function (nome) {
    console.log(`Olá, ${nome}. Boas Vindas!`)
}
boasVindas("Tom")

// 3:
function retornaMaiorNumero(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}
console.log(retornaMaiorNumero(6, 4))

// 4:
let calculoDaMedia = (num1, num2, num3) => {
    let soma = (num1 + num2 + num3)
    let resultadoFinal = soma / 3

    return resultadoFinal
}
console.log(calculoDaMedia(5, 8, 2))

// 5:
function somaArrays(array) {
    let soma = 0
    for (let i = 0; i < array.length; i++) {
        soma += array[i]
    }
    return soma
}
console.log(somaArrays([15, 10, 3]))

// 6:
let contaCaracteres = function(str) {
    let contagemDosCaracteres = str.trim().length
    return contagemDosCaracteres
}
console.log(contaCaracteres("Testando a função!"))
