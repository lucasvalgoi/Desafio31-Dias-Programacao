// ÁRVORES

// EXERCÍCIOS PRÁTICOS

// 1:
class Hierarquia {
    constructor(nome, titulo) {
      this.nome = nome;
      this.titulo = titulo;
      this.filhos = [];
    }
  
    addFilhos(no) {
      this.filhos.push(no);
    }
}

const ceo = new Hierarquia("João", "CEO");//criando o CEO (ROOT)

//criando os Filhos(CHILDREN) "A" e "B" do nó Pai (root)
const diretor1 = new Hierarquia("Maria", "Diretora de TI");
const diretor2 = new Hierarquia("Pedro", "Diretor de Vendas");

//adicionado os filhos "diretor1" e "diretor2" no nó "ceo" (Pai)
ceo.addFilhos(diretor1);
ceo.addFilhos(diretor2);

//criando os filhos "C" e "D" dos nós "diretor1" e "diretor2"
const gerente1 = new Hierarquia("Ana", "Gerente de Sistemas");
const gerente2 = new Hierarquia("Carlos", "Gerente de Campanhas");

//adicionando os filhos "gerente1" e "gerente2" nos nós "A" e "B"
diretor1.addFilhos(gerente1);
diretor2.addFilhos(gerente2);

//criando os filhos "E", "F" e "G" dos nós "gerente1" e "gerente2"
const analista1 = new Hierarquia("Sofia", "Analista de Sistemas");
const analista2 = new Hierarquia("Lucas", "Analista de Campanhas Sênior");
const analista3 = new Hierarquia("Julia", "Analista de Dados");

//adicionando os filhos "analista1", "analista2" e "analista3" nos nós "C" e "D"
gerente1.addFilhos(analista1);
gerente2.addFilhos(analista2);
gerente1.addFilhos(analista3);

function buscaEmLargura(raiz) {
    const fila = [raiz]; // Inicializa a fila com a raiz
  
    while (fila.length > 0) {
      const atualNaFila = fila.shift(); // Remove o primeiro da fila
      console.log(`Nome: ${atualNaFila.nome}, Cargo: ${atualNaFila.titulo}`);
  
      // iterar por cada "filho" de cada nó que está em "atualNaFila" e adicionar (push) em "fila"

      // usando o for of:
      // for (const filho of atualNaFila.filhos) {
      //   fila.push(filho); // Adiciona os filhos na fila
      //   }
    
      // usando o forEach:
      atualNaFila.filhos.forEach(filho => {
        fila.push(filho)
      });
    }
}
buscaEmLargura(ceo);

// 2:
function contagemEmProfundidade(no) {
  if (!no) {
    return 0 //árvore estaria vazia
  }

  let contagem = 1 //já conta o nó atual

  for (let filho of no.filhos) {
    contagem += contagemEmProfundidade(filho)
  }

  return contagem
}
// é usado o return dentro da função ao invés do console.log pois está sendo usado o operador += para atribuir o valor da função recursiva na "contagem", então o console.log somará UNDEFINED na "contagem", logo, a operação de um número com um Undefined resulta em um NaN!

const nosTotal = contagemEmProfundidade(ceo)
console.log("Número de nós total: ", nosTotal)

// 3:
class Pessoa {
  constructor(nome) {
    this.nome = nome
    this.filhos = []
  }

  addFilhos(filho) {
    this.filhos.push(filho)
  }
}

const avo = new Pessoa("João")
const mae = new Pessoa("Lúcia")
const filho1 = new Pessoa("Luis")
const filho2 = new Pessoa("Tom")

avo.addFilhos(mae)
mae.addFilhos(filho1)
mae.addFilhos(filho2)

let bfs = (raiz) => {
  const fila = [raiz]

  while (fila.length > 0) {
    const no = fila.shift()
    console.log(`Árvore genealógica: ${no.nome}`)
    for (let filho of no.filhos) {
      fila.push(filho)
    }
  }
}
bfs(avo)

// 4:

// 4.1
function encontraEmLargura(root, nome) {
  const fila = [root]

  while (fila.length > 0) {
    const atual = fila.shift()

    if (atual.nome == nome) {
      return atual
    }

    for (let filho of atual.filhos) {
      fila.push(filho)
    }
  }
  return null
}
const acharNoEmLargura = encontraEmLargura(avo, "Lucas")

if (acharNoEmLargura) {
  console.log("Foi achado na árvore genealógica: ", acharNoEmLargura)
} else {
  console.log("Não foi achado")
}

// 4.2
function encontraEmProfundidade
(no, nome) {
  if (no.nome === nome) {
    return no;
  }

  let encontraNo = null; // Variável para armazenar o nó encontrado

  no.filhos.forEach(filho => {
    if (!encontraNo) { // verifica se já encontrou para não continuar buscando
        const encontraNosFilhos = encontraEmProfundidade
        (filho, nome);
        if (encontraNosFilhos) {
            encontraNo = encontraNosFilhos;
        }
    }
  });

  return encontraNo;
}
const acharNoEmProfundidade = encontraEmProfundidade
(avo, "João")

if (acharNoEmProfundidade) {
  console.log("Foi achado na árvore genealógica: ", acharNoEmProfundidade)
} else {
  console.log("Não foi achado")
}

// usando o for of para iterar por cada filho dos nós
// function dfsFind(node, targetName) {
//   if (node.nome === targetName) {
//     return node; // Found it!
//   }

//   for (const filho of node.filhos) {
//     const foundInChildren = dfsFind(filho, targetName);
//     if (foundInChildren) {
//       return foundInChildren; // Found it in a child!
//     }
//   }

//   return null; // Not found in this branch
// }

// // Example usage:
// const foundNodeDFS = dfsFind(avo, "Lúcia");
// if (foundNodeDFS) {
//     console.log("Found: ", foundNodeDFS)
// } else {
//     console.log("Not Found")
// }