// LOOPS

// EXERCÍCIOS PRÁTICOS

// 1:
for (let i = 1; i <= 10; i++) {
    console.log(`Número: ${i}`)
}

// 2:
let listaNomes = ["Ana", "Peter", "Ben", "Lucas", "Jorge"]
for (let i = 0; i < listaNomes.length; i++) {
    console.log(`Oi, meu nome é ${listaNomes[i]}`)
}

// 3:
let listaNumeros = [7, 0, 2, 1, 11, 6]
for (let i = 0; i < listaNumeros.length; i++) {
    if (listaNumeros[i] > 10) break
    console.log(listaNumeros[i])
}

// 4:
let contador = 10
while (contador > 0) {
    console.log(`Lançamento em ${contador}`)
    contador--

    if (contador == 0) {
        console.log("Lançamento!")
    }
}

// 5:
let numero = 5
for (let i = numero - 1; i >= 1; i--) {
    console.log(numero*=i)
}
