// VARIÁVEIS

// EXERCÍCIOS PRÁTICOS

// 1:
const nome = "Lucas Luis Valgoi"
let idade = 16
console.log(`Meu nome é ${nome} e tenho ${idade} anos!`)

// 2:
let preco = 15
let desconto = 3
let precoComDesconto = preco - desconto
console.log(`O preço do produto com o desconto aplicado é de R$ ${precoComDesconto} reais`)

// 3:
let comidasFavoritas = ["Massa Carbonara", "Hamburguer Artesanal", "Churrasco"]
console.log(`Uma de suas comidas favoritas é ${comidasFavoritas[1]}`)

// 4:
let livro = {
    titulo: "Em Nome do Povo",
    autor: "Bruno Perini",
    ano: 2024
}
console.log(`O livro que você escolheu foi o ${livro.titulo} do ${livro.autor} e foi lançado no ano de ${livro.ano}`)

// 5:
let estaLogado = false
console.log(`Status de login: ${estaLogado}`)
estaLogado = true
console.log(`Status de login: ${estaLogado}`)

// 6:
const PI = 3.14
let raioDoCirculo = 5
let calculoDaArea = PI * raioDoCirculo
console.log(`O cálculo da área do círculo é de ${calculoDaArea.toFixed(2)}cm`)