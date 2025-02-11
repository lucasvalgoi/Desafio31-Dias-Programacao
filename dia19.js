// JSON

// EXERCÍCIOS PRÁTICOS

// 1:
const objetoJavaScript = {
    nome: "Lucas",
    idade: 16
};
const jsonResultante = JSON.stringify(objetoJavaScript)
console.log(jsonResultante)

// 2:
const listaDeTarefas = [
    { nome: "Lavar a louça", descricao: "Lavar a louça após o jantar", completo: false },
    { nome: "Estudar JavaScript", descricao: "Revisar os conceitos de objetos", completo: true },
    { nome: "Fazer compras", descricao: "Comprar pão, leite e ovos", completo: false }
];
const converteParaJson = JSON.stringify(listaDeTarefas)
console.log(converteParaJson)

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
            resolve(JSON.stringify(InfoProdutos))
            reject("Falha ao obter os produtos!")
        }, 2000)
    })
}

// ver se tem como trasnformar a resposta (que está em JSON) para objeto JS usando o JSON.parse com a resposta sendo passada pra dentro
async function buscarDados() {
    const resposta = await obtendoPodrutos();
    console.log(`\nInformações Produto convertido em JSON:\n ${resposta}`);
}
buscarDados();

async function converteStringJSON() {
    const converter = await obtendoPodrutos();
    //logar no console dessa forma não retorna [Object Object] e sim o resultado esperado
    console.log("\nInformações Produto JSON convertido em string:\n", JSON.parse(converter))
}
converteStringJSON();


// 4:
const dados = `{
    "nome": "Bruno",
    "idade": 16,
    "habilidades": ["HTML", "CSS", "JavaScript"]
}`;

const usuario = JSON.parse(dados)
console.log(`Nome: ${usuario.nome}`)
console.log(`Habilidades: ${usuario.habilidades}`)

// 5:
const objetoComplexo = {
    nome: "Luis",
    idade: 30,
    endereco: {
      rua: "Rua das Flores, 123",
      cidade: "São Paulo",
      cep: "01000-000"
    },
    interesses: ["música", "livros", "esportes"],
    contatos: [
      { tipo: "email", valor: "joao.silva@email.com" },
      { tipo: "telefone", valor: "11 99999-9999" }
    ]
};
console.log("Objeto original JS: ", objetoComplexo)

const converteObjetoJS = JSON.stringify(objetoComplexo, null, 2) // O "2 " é para colocar indentação para ver melhor no console
console.log("\nObjeto convertido para JSON:\n", converteObjetoJS);

const converteObjetoJSON = JSON.parse(converteObjetoJS)
console.log("\nObjeto JSON convertido de volta para JS: ", converteObjetoJSON)