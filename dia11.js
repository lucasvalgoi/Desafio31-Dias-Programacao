// ENCAPSULAMENTO E ABSTRAÇÃO

// EXERCÍCIOS PRÁTICOS

// 1:
class ContaBancaria {
    #saldo

    constructor(saldoInicial) {
        this.#saldo = saldoInicial
    }

    depositar(valor) {
        this.#saldo += valor
        console.log(`Depósito de R$${valor} realizado com sucesso! ✅`);
    }

    sacar(valor) {
        if (valor > this.#saldo) {
            console.log("Saldo Insuficiente!")
        } else {
            this.#saldo -= valor
            console.log(`Saque de R$${valor} realizado com sucesso! ✅`);
        }
    }

    consultarSaldo() {
        if (this.#saldo === 0) {
            console.log("Seu saldo está ZERADO!")
        } else {
            console.log(`Seu saldo é de R$${this.#saldo}`)
        }
    }

}
const meuSaldo = new ContaBancaria(0)
meuSaldo.consultarSaldo()
meuSaldo.depositar(1000)
meuSaldo.consultarSaldo()
meuSaldo.sacar(500)
meuSaldo.consultarSaldo()
meuSaldo.sacar(600)
meuSaldo.consultarSaldo()

// 2:
class Usuario {
    #senha

    constructor(senha) {
        this.#senha = senha;
    }

    alterarSenha(senhaAtual, novaSenha) {
        if (senhaAtual === this.#senha) {
            this.#senha = novaSenha
            console.log("Nova senha alterada com sucesso!")
        } else {
            console.log("Senha atual incorreta")
        }
    }
}
const user = new Usuario("Lucas123!")
user.alterarSenha("Lucas123!","Lucas7021!")
user.alterarSenha("Lucas123!","Lucas2025!")

// 3:
class ControleRemoto {
    #estadoControle

    constructor() {
        this.#estadoControle = true
    }

    ligarTv() {
        if (this.#estadoControle) {
            console.log("TV já está Ligada!")
        } else {
            this.#estadoControle = true
            console.log("TV Ligada!")
        }
    }

    desligarTv() {
        if (this.#estadoControle){
            this.#estadoControle = false
            console.log("TV Desligada!")
        } else {
            console.log("TV já está desligada!")
        }
    }
}
const tv = new ControleRemoto()
tv.ligarTv()
tv.desligarTv()

// 4:
class Cofre {
    #senha

    constructor(senhaInicial) {
         this.#senha = senhaInicial
    }

    alterarSenha(senhaAtual, senhaNova) {
        if (senhaAtual == this.#senha) {
            this.#senha = senhaNova
            console.log("Senha alterada")
        } else {
            console.log("Senha atual Incorreta")
        }
    }

    verificaSenha(senha) {
        if (senha == this.#senha) {
            console.log("Acesso Concedido")
        } else {
            console.log("Acesso Negado, senha incorreta")
        }
    }

}
const meuCofrinho = new Cofre("123")
meuCofrinho.verificaSenha("1234")
meuCofrinho.alterarSenha("123", "12345")
meuCofrinho.verificaSenha("12345")
meuCofrinho.alterarSenha("123", "1234")

// 5:
class CarrinhoCompras{
    #compras

    constructor() {
        this.#compras = []
    }

    adicionarCompra(compra) {
        this.#compras.push(compra)
        console.log(`${compra} adiocionado ao carrinho!`)
    }

    removerCompra(compra) {
        delete this.#compras[compra]
        console.log(`Compra removida do carrinho`)
    }

    listarCompras() {
        console.log("Compras:");
        this.#compras.forEach((compra) => {
          console.log(`${compra}`);
        });
      }
}
const listaDeCompras = new CarrinhoCompras()
listaDeCompras.adicionarCompra("Estudar Desafio 31 dia de Programação")
listaDeCompras.adicionarCompra("Tocar Violão")
listaDeCompras.adicionarCompra("Almoçar")
listaDeCompras.listarCompras()
listaDeCompras.removerCompra(1)
listaDeCompras.listarCompras()