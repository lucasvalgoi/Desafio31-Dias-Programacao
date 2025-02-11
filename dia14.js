// PILHAS

// EXERCÍCIOS PRÁTICOS

// 1:
class Pilha {
    constructor(pilha) {
        this.pilha = []
    }

    adicionarNaPilha(valor) {
        this.pilha.push(valor)
        console.log(`Valor ${valor} adicionado na pilha!`)
    }

    removerNaPilha() {
        if (this.estaVazio()) {
            console.log("A pilha está vazia!");
        }
        console.log(`Valor ${this.pilha[this.pilha.length - 1]} removido da pilha!`)
        this.pilha.pop()
    }

    vizualizarTopoPilha() {
        console.log(`O topo da sua lista é ${this.pilha[this.pilha.length - 1]}`)
    }

    estaVazio() {
        return this.pilha.length === 0
    }
}
const pilha = new Pilha()
pilha.adicionarNaPilha(1)
pilha.adicionarNaPilha(2)
pilha.adicionarNaPilha(3)
pilha.adicionarNaPilha(4)
pilha.adicionarNaPilha(5)

pilha.vizualizarTopoPilha()

pilha.removerNaPilha()

pilha.vizualizarTopoPilha()


// 2:

// jeito um (quebrei a cabeça pra fazer sozinho)
function checkPalindromo1(str) {
    let palavra = []

    for (const letra of str) {
    palavra.push(letra)
    }

    if (str.length === 1) {
        console.log(`${str} é um palíndromo`)
    }

    if (str.length === 2) {
        console.log(str[0] === str[1])
    }

    let resultado = []
    for (let i = 0; i < str.length; i++) {
        if (str[0] === str.slice(-1)) {
            resultado += palavra.pop()
        }

    }
    if (resultado === str) {
        console.log(`${str} é um palíndromo`)
    } else {
        console.log(`${str} não é um palíndromo`)
    }
}
checkPalindromo1("abccb")
// jeito 2 - usando reverse (quebrei bem mais a cabeça nesse)
function checkPalindromo2(str) {
    let palavra = []
    let palavraInvertida = palavra.reverse()

    for (const letra of str) {
    palavra.push(letra)
    }

    if (str.length === 1) {
        console.log(`${str} é um palíndromo`)
    }

    if (str.length === 2) {
        console.log(str[0] === str[1])
    }

    let resultado = []
    
    if (palavra === palavraInvertida) {
        for (let i = 0; i < str.length; i++) {
            resultado += palavra.pop()
        }
    }

    if (resultado === str) {
        console.log(`${str} é um palíndromo`)
    } else {
        console.log(`${str} não é um palíndromo`)
    }

}
checkPalindromo2("anna")

// 3:
class Editor {
    constructor(acoes) {
        this.acoes = []
    }

    realizarAcao(acao) {
        this.acoes.push(acao)
        console.log(`Ação realizada: ${acao}`)
    }

    desfazerAcao() {
        if (this.acoes.length === 0) {
            console.log("Não há ações para se desfazer")
            return //precisar usar para retornar a mensagem antes que siga em diante, caso a verificação seja true
        }

        let ultimaAcaoFeita = this.acoes.pop()
        console.log(`Ação desfeita: ${ultimaAcaoFeita}`)
    }
}
const editor = new Editor()
editor.realizarAcao("Correr 5km")
editor.realizarAcao("Tocar violão")
editor.realizarAcao("Passear com o cachorro")
editor.desfazerAcao()

// 4:
function decimalParaBinario(numero) {
    const pilha = [];
    while (numero > 0) {
      pilha.push(numero % 2);
      numero = Math.floor(numero / 2);
    }
    return pilha.reverse().join("");
}
  
console.log(decimalParaBinario(20));

// 5:
function checarParenteses(expressao) {
    const pilha = [];
    for (let char of expressao) {
      if (char === "(") {
        pilha.push(char);
      } else if (char === ")") {
        if (pilha.length === 0) {
          return false;
        }
        pilha.pop(); // vai tirando para que possa haver a verificação de todos os caracteres, um por um
      }
    }
    return pilha.length === 0; // retorna taamnho em 0 para que possa recomeçar novamente sem ter algo armazenado na pilha
}
  
console.log(checarParenteses("(a + b) * (c + d)"));
console.log(checarParenteses("(1 + (2 * 3)))"));