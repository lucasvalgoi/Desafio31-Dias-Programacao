// CLEAN CODE

/* 

*/

// EXERCÍCIOS PRÁTICOS

// 1:
function calcularImposto(valor, taxa) {
    return valor * (taxa/100);
}

console.log(`O a taxa a mais que você pagará no imposto será de: R$${calcularImposto(20, 6)} a mais`);

// 2:

let taxaFixaFrete = 2

function calcularFrete(valor, distancia) {
    taxaFixaFrete *= distancia;
    const total = valor + taxaFixaFrete;
    return `O valor total a ser pago a contar do frete é: R$${total}`;
}
console.log(calcularFrete(200, 25))

const exibirValorFrete = () => {
    console.log(`O frete é: R$${taxaFixaFrete}`);
}
exibirValorFrete()

// 3:
const maioridade = 18
const idade = 17
if (idade >= maioridade) {
    console.log("Maior de idade.");
} else {
    console.log("Menor de idade.")
}

// 4:
const usuario = 
{
    nome: "lucas",
    permissao: "admin"
}
const permissaoUsuario = usuario.permissao

// Verifica se o usuário é admin
if (permissaoUsuario === "admin") {
    console.log("Acesso liberado.");
} else {
    console.log("Acesso negado.")
}

// 5:
let valorTotal = 100;
let valorDesconto = 50;
console.log(valorTotal - valorDesconto);

// 6:

// ver como poderia ser feito para processar os valores de todos os produtos e retornar o valor de cada um ---> usando um laço FOR para iterar por cada propriedade do array de objetos que contém os produtos???

let produto =
{
    nome: "Banana",
    quantidade: 5,
    preco: 2.50
}

let totalProduto
let nomeProduto = produto.nome

function processarPedido() {
   totalProduto = produto.quantidade * produto.preco;
}
processarPedido("Banana")
function exibirPrecoPedido() {
    console.log(`O preço do pedido é de: ${totalProduto}`)
}
exibirPrecoPedido()