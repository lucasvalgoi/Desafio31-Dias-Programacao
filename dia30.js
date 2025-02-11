// CACHE

// EXERCÍCIOS PRÁTICOS

// 1:
const cache = {};

function buscarDados(chave) {
    if (cache[chave]) {
        console.log("Carregado do cache:", cache[chave]);
        return cache[chave];
    }

    console.log("Processando dados...");
    const dados = `Dados para ${chave}`
    cache[chave] = dados;
    return dados
}
console.log(buscarDados("usuario1"));
console.log(buscarDados("usuario1"));
console.log(buscarDados("usuario2"));
console.log(buscarDados("usuario2"));

// 4:
function removeDadoEspecifico(chave) {
    delete cache[chave]
    return `${chave} deletado do cache`
}
console.log(removeDadoEspecifico("usuario2"))

// 2:
const cache2 = {}
const TEMPO_EXPIRACAO = 15000

function buscarDadosComExpiracao(chave) {
    const agora = Date.now()

    if (cache2[chave] && agora - cache2[chave].timestamp < TEMPO_EXPIRACAO) {
        console.log("Carregado do cache:", cache2[chave].valor)
        return cache2[chave].valor
    }

    console.log("Processando dados...")
    const dados = `Dados para ${chave}`
    cache2[chave] = { valor: dados, timestamp: agora }
    return dados
}
console.log(buscarDadosComExpiracao("usuario2"));
// irá ocorrer 1° a verificação se o tempo definido está entre o tempo para se expirar, aí, enquanto a verificação acontece, ocorre o "processamento dos dados", com o retorno da variável "dados"
setTimeout(() => console.log(buscarDadosComExpiracao("usuario2")), 10000)

// como o tempo definido está fora do tempo de expiração, então a verificação não irá retornar true, logo ela irá apenas ocorrer o "processamento dos dados" e retornará a variável "dados".
setTimeout(() => console.log(buscarDadosComExpiracao("usuario2")), 20000)
