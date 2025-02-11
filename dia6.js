// ARRAYS

// EXERCÍCIOS PRÁTICOS

// 1:
let coresFavoritas = ["Vermelho", "Verde", "Roxo"]
coresFavoritas.push("Azul")
console.log(coresFavoritas.join(", "))

// 2:
let listaCompras = ["Água", "Suco de Uva", "Arroz", "Queijo"]
for (let i = 0; i < listaCompras.length; i++) {
    console.log(listaCompras[i])
}

// 3:
let numeros = [10, 20, 30, 40, 50]
console.log(numeros.slice(0, 3))

// 4:
let tarefas = ["Tomar 2L de água", "Almoçar", "Correr"]
console.log(tarefas)
tarefas.shift()
console.log(tarefas)

// 5:
let funcionalidades = ["Correr", "Limpar", "Jogar", "Ler"]
console.log(funcionalidades)
funcionalidades.splice(2, 1, "Subtituído")
console.log(funcionalidades)

// 6:
let arrPalavras = ["Este", "é", "o", "desafio", "de", "31", "dias", "de", "Programação"]
console.log(arrPalavras.join(" "))