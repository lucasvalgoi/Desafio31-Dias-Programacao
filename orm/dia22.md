<!-- ORM - usando o Sequelize -->

### **📋 Como funciona o ORM?**

O ORM funciona como um tradutor entre o código da aplicação e o banco de dados:

1. Você define modelos (classes) que representam as tabelas do banco de dados.
2. Usa métodos para manipular os dados, como `create()`, `findAll()`, `update()`, e `destroy()`.
3. O ORM converte esses métodos em comandos SQL para o banco de dados executar.

💡 **Exemplo básico:**

Em vez de escrever:
```sql
SELECT * FROM usuarios WHERE idade > 30;
```
​
No ORM, você escreveria:
```jsx
Usuario.findAll({ where: { idade: { [Op.gt]: 30 } } });
```

### **⚙️ Instalando e Configurando o Sequelize**

### **Passo 1: Instalar Dependências**

No terminal, execute:

```bash
npm install sequelize pg pg-hstore
```

💡 **Explicação:**

- `sequelize`: A biblioteca ORM.
- `pg` e `pg-hstore`: Drivers para conectar ao PostgreSQL.

---

### **Passo 2: Configurar o Sequelize**

Crie um arquivo `database.js` na pasta do seu projeto:

```jsx
const { Sequelize } = require('sequelize');

// Conectando ao banco de dados PostgreSQL
const sequelize = new Sequelize('crud', 'postgres', 'senha123', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
```

💡 **Explicação:**

- Substitua `'desafio'`, `'postgres'`, e `'senha123'` com os detalhes do seu banco.
- O parâmetro `dialect` indica o tipo de banco usado (PostgreSQL, neste caso).

### **🛠️ Criando um Modelo**

Vamos criar um modelo para representar a tabela `usuarios`.

1. Crie um arquivo chamado `Usuario.js`:
    
```jsx
const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const Usuario = sequelize.define('Usuario', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    idade: {
        type: DataTypes.INTEGER,
    },
});
    
module.exports = Usuario;
```
    

💡 **Explicação:**

- `DataTypes.STRING`: Define o tipo de dado da coluna como texto.
- `allowNull: false`: Indica que o campo é obrigatório.
- `unique: true`: Garante que os e-mails sejam únicos.


#### &rarr; **Exercícios Práticos da Utilização e Sincronização do CRUD nos arquivos da pasta:**
- [Database](./database.js)
- [Usuários](./Usuario.js)
- [Sync](./sync.js)
- [Create](./create.js)
- [Read](./read.js)
- [Update](./update.js)
- [Delete](./delete.js)