// GRAFOS

// EXERCÍCIOS PRÁTICOS

// const grafo = {
//     1: [2, 5],
//     2: [1, 4, 3],
//     3: [2, 4],
//     4: [2, 3, 5, 6],
//     5: [1, 4],
//     6: [4]
// };

// function buscaEmLargura(grafo, inicio) {
//     const visitados = new Set();
//     const fila = [inicio];
  
//     while (fila.length > 0) {
//       const no = fila.shift();
//       if (!visitados.has(no)) {
//         console.log(no);
//         visitados.add(no);
//         fila.push(...grafo[no]);
//       }
//     }
// }
  
// buscaEmLargura(grafo, 1);

// function buscaEmProfundidade(grafo, no, visitados = new Set()) {
//     if (visitados.has(no)) return;
//     console.log(no);
//     visitados.add(no);
//     grafo[no].forEach(vizinho => buscaEmProfundidade(grafo, vizinho, visitados));
// }
// buscaEmProfundidade(grafo, 1);

// 1:
const cidadesBrasil = {
    SP: ["RJ", "MG"],
    RJ: ["SP", "ES"],
    MG: ["SP", "ES"],
    ES: ["RJ", "MG"]
};

function bfsCidades(cidadesSerra, inicio) {
    const visitadas = new Set()
    const fila = [inicio]

    while (fila.length > 0) {
        const cidade = fila.shift()
        if (!visitadas.has(cidade)) {
            console.log(cidade)
            visitadas.add(cidade)
            fila.push(...cidadesSerra[cidade])
        }
    }
}
bfsCidades(cidadesBrasil, "MG")

// 2:
const grafoLetras = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
};

//usando for:
function estaoConectados1(grafo, ponto1, ponto2) {
    const vizinhosPonto1 = grafo[ponto1]
    const vizinhosPonto2 = grafo[ponto2]

    for (let i = 0; i < vizinhosPonto1.length; i++) {
        if (vizinhosPonto1[i] === ponto2) {
            return true
        }
    }

    for (let i = 0; i < vizinhosPonto2.length; i++) {
        if (vizinhosPonto2[i] === ponto1) {
            return true
        }
    }

    return false
}
console.log(estaoConectados1(grafoLetras, "A", "D"))

//usando método includes
function estaoConectados2(grafo, no1, no2) {
    return grafo[no1].includes(no2) || grafo[no2].includes(no1)
}
console.log(estaoConectados2(grafoLetras, "F", "E"))

// 3:
const redeSocial = {
    Antonio: ['Bruna', 'Carol'],
    Bruna: ['Antonio', 'Diego', 'Eduardo'],
    Carol: ['Antonio', 'Fernanda'],
    Diego: ['Bruna'],
    Eduardo: ['Bruna', 'Fernanda'],
    Fernanda: ['Carol', 'Eduardo']
};

function buscaEmLargura(grafo, inicio) {
    const visitados = new Set()
    const fila = [inicio]
    const conexoes = []
    // poderia ser feita a função sem as "outrasConexões", porém apareceria apenas as conexões diretas com a pessoa
    const outrasConexoes = []

    grafo[inicio].forEach(vizinho => {
        conexoes.push(vizinho)
        visitados.add(vizinho)
    });

    fila.push(...conexoes)

    while (fila.length > 0) {
        const no = fila.shift()
        
        // verificação se a pessoa tem conexões (vizinhos)
        if (grafo[no]) {
            grafo[no].forEach(vizinho => {
                if (!visitados.has(vizinho)) {
                    // console.log(vizinho) //-> loga todos os vizinhos (que não fazem conexão)
                    outrasConexoes.push(vizinho)
                    visitados.add(vizinho)
                    // fila.push(...grafo[vizinho]) //-> cria um novo array com os vizinhos do grafo e adiciona-os na "fila"
                }
            })
        }
    }

    //conexões diretas da pessoa (usando for of)
    console.log(`Conexões diretas de ${inicio}:`)
    for (let conexao of conexoes) {
        console.log(conexao)
    }

    //outras conexões (usando forEach)
    console.log("Outras conexões:")
    outrasConexoes.forEach(outro => console.log(outro))
}
buscaEmLargura(redeSocial, 'Carol')