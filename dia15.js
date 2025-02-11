// FILAS

// EXERCÍCIOS PRÁTICOS

// 1:
class AtendimentoRestaurante {
    constructor(fila) {
        this.fila = []
    }

    entrarFilaAtendimento(cliente) {
        this.fila.push(cliente)
        console.log(`Cliente ${cliente} entrou na fila de atendimento do restaurante`)
    }
    
    atenderClienteFila() {
        if (this.filaVazia())  {
            console.log("Fila vazia")
        }
        let cliente = this.fila.shift()
        console.log(`Cliente ${cliente} sendo atendido na fila de atendimento do restaurante`)
    }

    filaVazia() {
        return this.fila.length === 0
    }
}
const restaurante = new AtendimentoRestaurante()
restaurante.entrarFilaAtendimento("João")
restaurante.entrarFilaAtendimento("Lucas")
restaurante.entrarFilaAtendimento("Maria")
restaurante.atenderClienteFila()
restaurante.atenderClienteFila()

// 2:
class FilaMusicas {
    constructor(fila) {
        this.fila = []
    }

    entrarFilaMusica(musica) {
        this.fila.push(musica)
        console.log(`${musica} entrou na fila de reprodução`)
    }
    
    tocarMusicaFila() {
        if (this.filaVazia())  {
            console.log("Fila vazia")
        }
        let musica = this.fila.shift()
        console.log(`${musica} sendo tocada na fila de reprodução`)
    }

    filaVazia() {
        return this.fila.length === 0
    }
}
const playlist = new FilaMusicas()
playlist.entrarFilaMusica("Cantada Boba - Jorge&Mateus")
playlist.entrarFilaMusica("Cante por Nós - Vintage Culture")
playlist.entrarFilaMusica("Abismo - Jorge&Mateus")
playlist.tocarMusicaFila()

// 3:
class FilaMercado {
    constructor(clientes) {
        this.clientes = []
    }

    clientEntraFila(cliente) {
        this.clientes.push(cliente)
        // console.log(`${cliente} entrou na fila`)
    }

    ordemChegadaFila() {
        this.clientes.forEach((cliente, index) => {
            console.log(`${cliente} está como ${index + 1}º na fila`)
        })
    }
}
const clientes = new FilaMercado()
clientes.clientEntraFila("Marcos")
clientes.clientEntraFila("Romeu")
clientes.clientEntraFila("Paulo")
clientes.ordemChegadaFila()

// 4:
class MensagemEmLote {
    constructor(mensagens) {
        this.mensagens = []
    }

    adicionarMensagem(mensagem) {
        this.mensagens.push(mensagem)
        // console.log(`mensagem adicionada: ${mensagem}`)
    }

    enviarMensagem() {
        let ultimaMensagem = this.mensagens.shift()
        console.log(`Mensagem sendo enviada: ${ultimaMensagem}`)
    }
}
const mensagens = new MensagemEmLote()
mensagens.adicionarMensagem("Opaa")
mensagens.enviarMensagem()
mensagens.adicionarMensagem("Tudo certo?")
mensagens.enviarMensagem()

// 5:
class FilaProcessos {
    constructor() {
        this.itens = [];
    }

    enqueue(elemento) {
        this.itens.push(elemento);
    }

    dequeue() {
        if (this.isEmpty()) {
        return "A fila está vazia!";
        }
        return this.itens.shift();
    }

    front() {
        return this.isEmpty() ? "A fila está vazia!" : this.itens[0];
    }

    isEmpty() {
        return this.itens.length === 0;
    }

    ordemProcessosFila() {
        this.itens.forEach((item, index) => {
            console.log(`${index + 1}º: ${item}`)
        })
    }
}

const fila = new FilaProcessos();
fila.enqueue("Esquente a pipoca por 1min no micro-ondas");
fila.enqueue("Enquanto a pipoca está esquentando, pegue um recipiente grande para despejar as pipocas");
fila.enqueue("Após sua pipoca esquentar, o micro-ondas fará um BIP");
fila.enqueue("Despeje a pipoca dentro do recipiente que você pegou");
fila.enqueue("Então, sua pipoca estará pronta para comer!");
fila.ordemProcessosFila()
console.log(fila.dequeue());
console.log(fila.front());
