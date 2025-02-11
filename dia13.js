// POLIMORFISMO

// EXERCÍCIOS PRÁTICOS

// 1:
class Funcionario {
    constructor(nome, horasTrabalhadasMes, custoHoraTrabalhada) {
        this.nome = nome;
        this.horasTrabalhadasMes = horasTrabalhadasMes;
        this.custoHoraTrabalhada = custoHoraTrabalhada
    }

    calculoSalario() {
        console.log(`${this.nome} trabalha ${this.horasTrabalhadasMes} horas em um mês, sua hora trabalhada é de ${this.custoHoraTrabalhada} e tem um salário de R$${this.custoHoraTrabalhada * this.horasTrabalhadasMes}`)
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, horasTrabalhadasMes, custoHoraTrabalhada, cargoComoDev) {
        super(nome, horasTrabalhadasMes, custoHoraTrabalhada)
        this.cargoComoDev = cargoComoDev
    }

    calculoSalario() {
        console.log(`${this.nome} está atuando na área de Desenvolvimento de Software como ${this.cargoComoDev}, trabalha ${this.horasTrabalhadasMes} horas em um mês, sua hora trabalhada é de ${this.custoHoraTrabalhada} e tem um salário de R$${this.custoHoraTrabalhada * this.horasTrabalhadasMes}`)
    }
}

class Gerente extends Funcionario {
    constructor(nome, horasTrabalhadasMes, custoHoraTrabalhada, setorComoGerente) {
        super(nome, horasTrabalhadasMes, custoHoraTrabalhada)
        this.setorComoGerente = setorComoGerente
    }

    calculoSalario() {
        console.log(`${this.nome} é Gerente no setor de ${this.setorComoGerente}, trabalha ${this.horasTrabalhadasMes} horas em um mês, sua hora trabalhada é de ${this.custoHoraTrabalhada} e tem um salário de R$${this.custoHoraTrabalhada * this.horasTrabalhadasMes}`)
    }
}
const funcionarios = [new Desenvolvedor("Jorge", 250, 7.50, "FullStack"), new Gerente("Tim", 400, 12, "TechLead")]
funcionarios.forEach(funcionario => funcionario.calculoSalario())

// 2:
class Transporte {
    mover() {
        console.log("O Transporte genérico está se movendo!")
    }
}

class Carro extends Transporte {
    mover() {
        console.log("O Carro está Andando!")
    }
}

class Aviao extends Transporte {
    mover() {
        console.log("O Avião está Voando!")
    }
}

class Barco extends Transporte {
    mover() {
        console.log("O Barco está se movendo pela água!")
    }
}

const transportes = [new Carro(), new Aviao(), new Barco()]
transportes.forEach(transporte => (transporte.mover()))

// 3:
class Documento {
    exibirConteudo() {
        console.log("Exibindo conteúdo em formato genérico")
    }
}

class PDF extends Documento {
    constructor(nomeDocPdf) {
        super()
        this.nomeDocPdf = nomeDocPdf
    }

    exibirConteudo() {
        console.log(`Documento ${this.nomeDocPdf} agora é um documento PDF! ${this.nomeDocPdf}.pdf`)
    }
}

class Word extends Documento {
    constructor(nomeDocWord) {
        super()
        this.nomeDocWord = nomeDocWord
    }

    exibirConteudo() {
        console.log(`Documento ${this.nomeDocWord} agora é um documento Word! ${this.nomeDocWord}.docx`)
    }
}

const docs = [new PDF("Desafio 31 dias de Programação"), new Word("Como ser um bom leitor")]
docs.forEach(doc => (doc.exibirConteudo()))

// 4:
class Animal {
    fazerSom() {
      console.log("O animal faz um som!");
    }
}
  
class Cachorro extends Animal {
    fazerSom() {
      console.log("O cachorro faz AU AUUU!");
    }
}
  
class Passaro extends Animal {
    fazerSom() {
      console.log("O Pássarinho faz PIU PIUUU!");
    }
}
  
const cachorro = new Cachorro();
const passaro = new Passaro();
  
cachorro.fazerSom();
passaro.fazerSom();

// 5:
class FormaGeometrica {
    calcularArea() {
        console.log("Área da forma genérica")
    }
}

class Quadrado extends FormaGeometrica {
    constructor(lado) {
        super()
        this.lado = lado
    }

    calcularArea() {
        let resultado = this.lado*this.lado
        console.log(`O resultado do cálculo da Área de um Quadrado de lado = ${this.lado}cm é de ${resultado}cm²`)
    }
}
const quadrado = new Quadrado(5)
quadrado.calcularArea()

class Circulo extends FormaGeometrica {
    constructor(raio) {
        super()
        this.raio = raio
    }

    calcularArea() {
        // let PI = 3.14
        let resultado = Math.PI*(Math.pow(this.raio, 2))
        console.log(`O resultado do cálculo da Área de um Circulo de raio = ${this.raio}cm é de ${resultado}cm²`)
    }
}
const circulo = new Circulo(2)
circulo.calcularArea()

class Retangulo extends FormaGeometrica {
    constructor(base, altura) {
        super()
        this.base = base
        this.altura = altura
    }

    calcularArea() {
        let resultado = this.base*this.altura
        console.log(`O resultado do cálculo da Área de um RetÂngulo de base = ${this.base}cm e de altura = ${this.altura}cm é de ${resultado}cm²`)
    }
}
const retangulo = new Retangulo(4, 6)
retangulo.calcularArea()