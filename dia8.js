// MATRIZES

// EXERCÍCIOS PRÁTICOS

// 1:
let matriz3x3 = [];
let numeros = 1; //variável que vai ser usada para acrescetar mais 1 a cada iteração da matriz
let linhas = 3;
let colunas = 3;
for (let i = 0; i < linhas; i++) {
    matriz3x3[i] = [];
    for (let j = 0; j < colunas; j++) {
        matriz3x3[i][j] = numeros++ //atribui ao valor atual da matriz o valor da variável numeros acrescentando mais 1 à variável
    }
}
console.log(matriz3x3)

// 2:
let matrizSomada = [
    [10, 2, 3],
    [4, 20, 6],
    [7, 8, 30]
];
let soma = 0;
for (let i = 0; i < matrizSomada.length; i++) {
    for (let j = 0; j < matrizSomada[i].length; j++) {
        soma += matrizSomada[i][j]
    }
}
console.log(`A Soma total da matriz é ${soma}`)

// 3:
let tabuleiro = []; 
for (let i = 0; i < 8; i++) {
    tabuleiro[i] = [];
    for (let j = 0; j < 8; j++) {
        //usando operador ternário: tabuleiro[i][j] = (i + j) % 2 === 0 ? "⬜" : "⬛";
        if ((i + j) % 2 === 0) {
            tabuleiro[i][j] = "⬜"
        } else {
            tabuleiro[i][j] = "⬛"
        }
    }
}
console.log(tabuleiro)

// 4:
let matrizesPar = [
    [1, 10, 20],
    [30, 5, 6],
    [7, 8, 16]
];
let contadorDePares = 0;
for (let i = 0; i < matrizesPar.length; i++) {
    for (let j = 0; j < matrizesPar[i].length; j++) {
        if (matrizesPar[i][j] % 2 === 0){
            contadorDePares++
        }
    }
}
console.log(`Elementos pares: ${contadorDePares} `)

// 5:
let matrizMaiorQueDez = [
    [1, 10, 20],
    [30, 5, 6],
    [7, 8, 15]
];
for (let i = 0; i < matrizMaiorQueDez.length; i++) {
    for (let j = 0; j < matrizMaiorQueDez[i].length; j++) {
        if (matrizMaiorQueDez[i][j] > 10){
            matrizMaiorQueDez[i][j] = 0
        }
    }
}
console.log(matrizMaiorQueDez)

// 6:
let matrizMultiplacacao = [
    [3, 9, 36],
    [2, 10, 40],
    [5, 7, 1]
];
for (let i = 0; i < matrizMultiplacacao.length; i++) {
    for (let j = 0; j < matrizMultiplacacao[i].length; j++) {
        matrizMultiplacacao[i][j] *= 2
    }
}
console.log(matrizMultiplacacao)