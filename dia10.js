// CLASSES E OBJETOS

// EXERCÍCIOS PRÁTICOS

// 1:
class Livro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }

    listarLivro() {
        console.log(`O Livro ${this.titulo} foi escrito por ${this.autor} e foi lançado em ${this.ano}`)
    }
}
const livro1 = new Livro("Em Nome do Povo", "Bruno Perini", "2024")
livro1.listarLivro()

// 2.1:
class ContaBancaria1 {
    constructor() {
        this.dinheiro = [];
    }

    depositar(valor) {
        this.dinheiro.push(valor)
        console.log(`R$${this.dinheiro} depositado!`);
    }

    sacar(valor) {
        console.log(`R$${valor} sacado!`)
        let saldoNaConta = this.dinheiro.push(this.dinheiro - valor)
        console.log(`Há na sua conta R$${saldoNaConta}`) //apresenta o valor na conta após o saque
    }
}
const banco = new ContaBancaria1()
banco.depositar(150)
banco.sacar(10)

// 2.2:
class ContaBancaria2 {
    #saldo;
  
    constructor(saldoInicial) {
      this.#saldo = saldoInicial;
    }
  
    sacar(valor) {
      if (valor > this.#saldo) {
        console.log(`Saldo insuficiente! Saldo atual: ${this.#saldo}`);
      } else {
        this.#saldo -= valor;
        console.log(`Saque realizado: ${valor}\nSaldo atual: ${this.#saldo}`);
      }
    }
  
    depositar(valor) {
      if (valor <= 0) {
        console.log(`O valor do depósito deve ser positivo!`);
      } else {
        this.#saldo += valor;
        console.log(`Depósito realizado: ${valor}\nSaldo atual: ${this.#saldo}`);
      }
    }
  
    getSaldo() {
      return this.#saldo;
    }
}  
const conta = new ContaBancaria2(1000);
conta.sacar(200);
conta.depositar(500);
console.log(`Saldo final: ${conta.getSaldo()}`);

// 3:
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    boasVindas() {
        console.log(`Seja Bem Vindo, ${this.nome}`)
    }
}
const pessoa1 = new Pessoa("Lucas Luis Valgoi")
pessoa1.boasVindas();

// 4:
class Calculadora {
    // ao invés de estipular dois valores na calculadora, poderia ser criado apenas "this.valores = []" com um array vazio para que possa ser colocado no array os valores de cada cálculo
    constructor(valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }

    soma() {
        let resultadoSoma = this.valor1 + this.valor2
        return `O resultado da Soma foi de ${resultadoSoma}`
    }

    subtracao() {
        let resultadoSubtracacao = this.valor1 - this.valor2
        return `O resultado da Subtração foi de ${resultadoSubtracacao}`
    }

    multiplicacao() {
        let resultadoMultiplicacao = this.valor1 * this.valor2
        return `O resultado da Multiplicação foi de ${resultadoMultiplicacao}`
    }

    divisao() {
        let resultadoDivsao = this.valor1 / this.valor2
        return `O resultado da Divisão foi de ${resultadoDivsao}`
    }
}
const calculo = new Calculadora(40, 10)
console.log(calculo.soma())
console.log(calculo.subtracao())
console.log(calculo.multiplicacao())
console.log(calculo.divisao())


// 5:
class AgendaContatos {
    constructor() {
        this.contatos = [];
    }

    armazenarContatos(contato) {
        this.contatos.push(contato)
        console.log(`Contato de ${contato} adicionado e armazenado`)
    }

    exibirContatos() {
        console.log(`Sua Lista de contatos: ${this.contatos.join(", ")}`)
    }
}
const contato = new AgendaContatos()
contato.armazenarContatos("Lucas Valgoi")
contato.armazenarContatos("Luis Henrique")
contato.exibirContatos()


// EXEMPLO DE UM PEQUENO SISTEMA DE BD PARA ADICIONAR E LISTAR DADOS:

// class BancoDeDados {
//     constructor() {
//       this.dados = [];
//     }
  
//     adicionar(dado) {
//       this.dados.push(dado);
//       console.log("Dado adicionado!");
//     }
  
//     listar() {
//       console.log(this.dados);
//     }
//   }
  
//   const bd = new BancoDeDados();
//   bd.adicionar("Cliente 1");
//   bd.listar(); // Saída: ["Cliente 1"]