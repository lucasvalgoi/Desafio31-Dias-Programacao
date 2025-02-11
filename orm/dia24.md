<!-- APIs -->
<!-- Criação da Minha primeira API no CRUD do dia 22 -->

### **📚 Como uma API Funciona?**

Uma API geralmente segue o modelo **request-response** (solicitação e resposta).

- **Solicitação (Request):** O cliente envia uma mensagem à API, pedindo algo.
- **Resposta (Response):** A API processa o pedido e devolve uma resposta.

📌 **Elementos de uma API:**

1. **Endpoint:**
    
    É a URL onde a API pode ser acessada.
    
    Exemplo: `https://api.openweathermap.org/data/2.5/weather`
    
2. **Métodos HTTP:**
    
    Define a ação que será executada:
    
    - **GET:** Buscar dados.
    - **POST:** Enviar dados para criar algo novo.
    - **PUT:** Atualizar dados existentes.
    - **DELETE:** Remover dados.
3. **Formato de Dados:**
    
    APIs geralmente usam **JSON** para trocar informações.


### **🔍 Exemplos Práticos**

### **1. Fazendo uma Solicitação GET:**

Buscar a previsão do tempo para uma cidade:

📌 **URL:**

`https://api.openweathermap.org/data/2.5/weather?q=London&appid=SEU_TOKEN`

💡 **Requisição:**

```json
{
  "q": "London",
  "appid": "SEU_TOKEN"
}

```

💡 **Resposta:**

```json
{
  "weather": [
    {
      "description": "clear sky"
    }
  ],
  "main": {
    "temp": 280.32,
    "feels_like": 278.59
  }
}

```

- **weather.description:** Céu limpo.
- **main.temp:** Temperatura atual.


### **2. Enviando Dados com POST:**

Cadastrar um novo usuário no sistema:

📌 **Endpoint:**

`https://api.sistema.com/usuarios`

💡 **Requisição:**
```json
{
  "nome": "João",
  "email": "joao@email.com"
}

```

💡 **Resposta:**
```json
{
  "mensagem": "Usuário criado com sucesso!",
  "id": 12345
}
```

**Entenda os Erros:**    
    APIs retornam códigos de status HTTP para indicar o que aconteceu:
    - *Principais Códigos Status HTTP:*    
        - **200:** Sucesso.
        - **400:** Solicitação inválida.
        - **404:** Endpoint não encontrado.
        - **500:** Erro no servidor.


## __**✍️ Mão na Massa:**__
#### **Criando uma API simples**


*1. Instalando no Terminal o `Express.js`*
```bash
npm install express
```

*2. Crie o arquivo `api.js`*
    insira todo o código de funcionamento da api neste arquivo
    - Conteúdo do arquivo [api.js](./api.js)

*3. Não se esqueça de exportar todas as funções do CRUD para o arquivo da API*

*4. Com o código da API no arquivo `api.js` feito, instale o **insomnia** ou o **Postman**:*
    - Crie uma `Nova Coleção` com um nome, por exemplo -> `Minha Primeira API`
    - Adicione em `Nova Requisição HTTP` com os métodos:
      - `GET` => para retornar o status da função com uma mensagem (para saber que deu certo)
      - `POST` => para criar os usuários baseado nas informaçõe da área "Body" e enviar para a API
      - `GET` => para listar todos os usuários no formato JSON na área das "Responses" no Insomnia ou Postman