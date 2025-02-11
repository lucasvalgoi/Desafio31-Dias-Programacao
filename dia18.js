// PROGRAMAÇÃO ASSÍCRONA

// EXERCÍCIOS PRÁTICOS

// 1:
//com função de Callback
function carregarDados1(callback) {
    setTimeout(() => {
        console.log("Dados carregados!(com Callback function)")
        callback("Dados executados!(com Callback function)")
    }, 2000)
}
carregarDados1((response) => {
    console.log(response)
})

//com Promises
function carregarDados2() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("Dados carregados!(com Promises)")
            resolve("Dados executados!(com Promises)")
        }, 2000)
    })
}
// usando .then() e .catch() ao invés do Async/Await
carregarDados2()
    .then(dados => {
        console.log(dados)
    })
    .catch(erro => {
        console.log("Erro no carregamento dos dados: ", erro)
})

// 2:
function processarInfos() {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve("As informações foram processadas com Sucesso!")
            reject("Falha em processar as informações!")
        }, 2500)
    })
}

async function executarInfos() {
    try {
        const infos = await processarInfos()
        console.log(infos)
    } catch (erro) {
        console.log("Erro com as informações: ", erro);
    }
}
executarInfos()

// 3:
const InfoProdutos = [
    { id: 1, nome: "Camiseta", preco: 29.99, descricao: "Camiseta de algodão confortável." },
    { id: 2, nome: "Calça Jeans", preco: 99.99, descricao: "Calça jeans clássica." },
    { id: 3, nome: "Tênis", preco: 149.99, descricao: "Tênis esportivo para corrida." },
    { id: 4, nome: "Boné", preco: 39.99, descricao: "Boné casual com ajuste." },
    { id: 5, nome: "Meias", preco: 19.99, descricao: "Kit com 3 pares de meias." }
];

function obtendoPodrutos() {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve(InfoProdutos)
            reject("Falha ao obter os produtos!")
        }, 3000)
    })
}
async function exibindoProdutos() {
    try {
        const produtos = await obtendoPodrutos()
        console.log(produtos)
    } catch (erro) {
        console.log("Erro: ", erro)
    }
}
exibindoProdutos()

// 4:
function tarefa1() {
    return new Promise(resolve => 
        setTimeout(() => {
            resolve("Colocando o arroz para cozinhar")
        }, 3500));
}

function tarefa2() {
    return new Promise(resolve => 
        setTimeout(() => {
            resolve("Assando a carne")
        }, 3000));
}
// usando Promises.all() para executar de todas as promises
async function execuntandoTarefas() {
    const tarefas = await Promise.all([tarefa1(), tarefa2()])
    console.log(tarefas)
}
execuntandoTarefas()