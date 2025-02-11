// STRINGS

// EXERCÍCIOS PRÁTICOS

// 1:
let nomeCompleto = "Lucas Luis Valgoi"
console.log(nomeCompleto.slice(0, 10))

// 2:
let verificaPalavra1 = "TypeScript"
let verificaPalavra2 = "JavaScript"
if (verificaPalavra2.includes("Java")) {
    console.log("Esta palavra contém JAVA")
} else {
    console.log("Esta palavra não contém JAVA")
}

//3:
let convertePalavra = "     Papo de Grana     "
console.log(convertePalavra.trim().toLocaleUpperCase())

// 4:
let fraseDoSistema = "Houve um erro no sistema."
console.log(fraseDoSistema.replace("um erro", "uma correção"))

// 5:
let declaracao = "Eu Amo JavaScript"
console.log(declaracao.slice(0, 2))
console.log(declaracao.slice(3, 6))
console.log(declaracao.slice(7, 17))
console.log(declaracao.slice(0, 17))

// 6:
let url = "https://www.github.com"
console.log(url.startsWith("https://"))
console.log(url.endsWith(".com"))