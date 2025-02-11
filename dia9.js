// RECURSÃO

// EXERCÍCIOS PRÁTICOS

// 1:
function contaRegressiva (n) {
    if (n === 0) {
        console.log("Fim!")
        return
    }
    console.log(n)
    contaRegressiva(n - 1)
}
contaRegressiva(4)

// 2:
function fatorial(num) {
    if (num === 0) return 1
    return fatorial(num - 1) * num
}
console.log(fatorial(5))

// 3:
//jeito que achei meio complicado
function somaDoArray(numero) {
    if (numero.length === 0) {
        return 0
    } else {
        return numero.shift() + somaDoArray(numero)
    }
}
console.log(somaDoArray([1, 2, 3]))

// jeito com slice e parece mais simples
function encontraSoma(nums) {
    if (nums.length === 0) return 0
    return nums[0] + encontraSoma(nums.slice(1))
}
console.log(encontraSoma([2, 3, 4, 5]))

// 4:
function checkPalindromo(str) {
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1]

    if (str[0] === str.slice(-1)) {
        return checkPalindromo(str.slice(1, -1))
    }
    return false;
}
console.log(checkPalindromo("amar"))

// 5:
function calculoFibonacci(n) {
    if (n <= 1) return n
    return chamada1 = calculoFibonacci(n - 1) + calculoFibonacci(n -2)
}
console.log(calculoFibonacci(7)) //a saída é 13 pois (0, 1, 1, 2, 3, 5, 8, 13) -> a sequência é contada A PARTIR do 0 (sem contar o 0)

// 6:
function listarArq(diretorio) {
    /*para cada ITEM do Diretório, será verificado se o ITEM é um array, caso for, será realizada a recursão, mostrando os ITENS(elementos desse ARRAY), senão, será retornado só o ITEM*/ 
    for (let item of diretorio) {
        if (Array.isArray(item)) {
            listarArq(item);
        } else {
            console.log(item);
        }
    }
}
// pasta com arquivos no diretório (sem subdiretórios): ["index.html", "dia9.js", "style.css"]

// pasta com subdiretórios:
let arquivos = ["index.html", ["css", "style.css", "reset.css"], "dia9.js"];
listarArq(arquivos)