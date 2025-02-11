<!-- conteúdo teórico -->

### **📌 O que é Cache?**

- O **cache** é um sistema de armazenamento temporário que salva dados para acessos futuros mais rápidos.
- Evita que operações desnecessárias sejam realizadas, como novas consultas a um banco de dados ou processamento repetitivo.

💡 **Exemplo do mundo real:**

Pense em fazer marmitas para a semana. Ao invés de cozinhar cada refeição na hora, você prepara tudo de uma vez e armazena na geladeira. Quando precisar, é só esquentar.

 - Da mesma forma, o cache mantém dados "prontos" para serem consumidos rapidamente.

---

### **Como o Cache Funciona?**

1. Quando o sistema processa uma informação pela primeira vez, os dados são armazenados no cache.
2. Em acessos futuros, o sistema verifica o cache antes de realizar qualquer nova operação.
3. Se os dados estiverem no cache, eles são usados diretamente. Caso contrário, o sistema processa os dados e atualiza o cache.

---

### **Tipos de Cache**

1. **Cache no Frontend:**
    - Armazena informações no navegador, como imagens, CSS e HTML.
    - Exemplo: **LocalStorage** ou **SessionStorage**.
2. **Cache no Backend:**
    - Usado em servidores para armazenar resultados de consultas ao banco de dados ou respostas de APIs.
    - Ferramentas como Redis são populares nesse contexto.
3. **Cache em Sistemas Distribuídos:**
    - Usado para compartilhar dados em aplicações com múltiplos servidores.


### **Implementando Cache em JavaScript**

### **1. Cache Simples em Memória**

Um cache básico pode ser implementado como um objeto em JavaScript:

```jsx
const cache = {};

function buscarDados(chave) {
  if (cache[chave]) {
    console.log("Carregado do cache:", cache[chave]);
    return cache[chave];
  }

  console.log("Processando dados...");
  const dados = `Dados para ${chave}`; // Simulando processamento
  cache[chave] = dados;
  return dados;
}

// Testando o cache
console.log(buscarDados("usuario1")); // Processando...
console.log(buscarDados("usuario1")); // Carregado do cache
```

💡 **Explicação:**

- O objeto `cache` armazena os dados processados.
- A função verifica o cache antes de realizar qualquer operação.


### **2. Cache com Expiração**

Adicione um controle de tempo para expirar dados antigos.

```jsx
const cache = {};
const TEMPO_EXPIRACAO = 30000; // 30 segundos

function buscarDadosComExpiracao(chave) {
  const agora = Date.now();
    // .timestamp = carimbo do tempo em milissegundos do tempo atual.
  if (cache[chave] && agora - cache[chave].timestamp < TEMPO_EXPIRACAO) {
    console.log("Carregado do cache:", cache[chave].valor);
    return cache[chave].valor;
  }

  console.log("Processando dados...");
  const dados = `Dados para ${chave}`;
  cache[chave] = { valor: dados, timestamp: agora };
  return dados;
}

// Testando o cache com expiração
console.log(buscarDadosComExpiracao("usuario2"));
setTimeout(() => console.log(buscarDadosComExpiracao("usuario2")), 20000); // Dentro do prazo
setTimeout(() => console.log(buscarDadosComExpiracao("usuario2")), 40000); // Expirado
```

💡 **Explicação:**

- Adiciona um `timestamp` para controlar o tempo de vida dos dados.
- Expira o cache quando o tempo limite é atingido.


#### *Conteúdo prático da aula 30:*
- [aula30.js](./dia30.js)