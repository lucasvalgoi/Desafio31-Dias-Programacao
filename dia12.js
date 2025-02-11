// HERANÇA

// EXERCÍCIOS PRÁTICOS

// 1:
class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    andar() {
        console.log(`O veículo ${this.marca} ${this.modelo} está andando!`)
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, numBancos) {
        super(marca, modelo)
        this.numBancos = numBancos
    }

    numeroBancos() {
        console.log(`O ${this.marca} - ${this.modelo} tem ${this.numBancos} bancos!`)
    }

    fazVrumVrum() {
        console.log(`O ${this.marca} - ${this.modelo} faz VRUM VRUMMM!`)
    }
}
const carrinho = new Carro("Jeep", "Renegade", "5")
carrinho.andar()
carrinho.numeroBancos()
carrinho.fazVrumVrum()

class Moto extends Veiculo {
    constructor(marca, modelo) {
        super(marca, modelo)
    }

    empina() {
        console.log(`A ${this.marca} - ${this.modelo} está empinando!`)
    }

    fazBiBi() {
        console.log(`A ${this.marca} - ${this.modelo} faz BIBIII!`)
    }
}
const motinho = new Moto("Yamaha", "MT-03")
motinho.andar()
motinho.empina()
motinho.fazBiBi()

// 2:
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    informacaoFuncionario() {
        console.log(`${this.nome} tem um salário de R$${this.salario}`)
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario, setor) {
        super(nome, salario)
        this.setor = setor;
    }

    informacaoGerente() {
        console.log(`${this.nome} é gerete no setor de ${this.setor} e tem um salário de R$${this.salario}!`)
    }
}
const funcionario = new Gerente("Luis Henrique", "15000", "T.I")
funcionario.informacaoGerente()

// 3:
class Forma {
    calcularArea() {
        console.log("Área da forma genérica")
    }
}

class Quadrado extends Forma {
    calcularArea(lado) {
        let resultado = lado*lado
        console.log(`O resultado do cálculo da Área de um Quadrado de lado = ${lado}cm é de ${resultado}cm²`)
    }
}
const quadrado = new Quadrado()
quadrado.calcularArea(4)

class Circulo extends Forma {
    calcularArea(raio) {
        // let PI = 3.14
        let resultado = Math.PI*(Math.pow(raio, 2))
        console.log(`O resultado do cálculo da Área de um Circulo de raio = ${raio}cm é de ${resultado}cm²`)
    }
}
const circulo = new Circulo()
circulo.calcularArea(3)

// 4:
class Animal {
    constructor(nome) {
        this.nome = nome
    }

    correr() {
        console.log(`${this.nome} está correndo!`)
    }
}

class Cachorro extends Animal {
    latido() {
        console.log(`${this.nome} faz RUFRUFFF`)
    }
}
const cachorro = new Cachorro("Pluto")
cachorro.correr()
cachorro.latido()

class Gato extends Animal {
    fazXixi() {
        console.log(`${this.nome} faz xixi na caixinha de areia`)
    }
}
const gato = new Gato("Tom")
gato.correr()
gato.fazXixi()

// 5:
class Conta {
    constructor(saldoInicial, juros, tempo) {
        this.saldoInicial = saldoInicial;
        this.juros = juros;
        this.tempo = tempo;
    }
}

class ContaPoupanca extends Conta {
    #saldo
    constructor(saldoInicial, juros, tempo) {
        super(saldoInicial, juros, tempo)
        this.#saldo = saldoInicial
    }    
    rendimentoJurosSimples() {
        let calculoJuros = this.#saldo*(this.juros/100)*this.tempo
        console.log(`O valor de R$${this.#saldo} na sua conta Poupança, com um juros de ${this.juros}% a.m a um tempo em meses de ${this.tempo} está redendendo R$${calculoJuros}`)
        this.#saldo += calculoJuros
        if(this.tempo <= 0) {
            console.log("O seu investimento não está rendendo nada mensalmente pois você preisa deixar ao menos por 1 mês")
        }
    }

    exibirSaldoTotal() {
        console.log(`O Saldo total da sua conta é de R$${this.#saldo}`)
    }
}
const minhaConta = new ContaPoupanca(1000, 6, 5)
minhaConta.rendimentoJurosSimples()
minhaConta.exibirSaldoTotal()