<!-- CRUD - NO BANCO DE DADOS -->

<!-- EXERCÍCIOS PRÁTICOS NO BEEKEPERSTUDIO -->

### **O que é O CRUD?**

- **C** - **Create** (Criar): Adicionar novos dados ao banco.
- **R** - **Read** (Ler): Consultar ou buscar dados existentes.
- **U** - **Update** (Atualizar): Modificar dados já existentes.
- **D** - **Delete** (Deletar): Remover dados do banco.

### **🛠️ Implementando o CRUD**

Vamos usar a tabela `usuarios` como exemplo para aplicar o CRUD.

### **Criando a Tabela (DDL)**

Crie um novo banco de dados:
```sql
CREATE DATABASE crud;
```

Crie uma tabale apra os usuários:
```sql
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    idade INT
);
```


### **1. CREATE - Inserindo Dados**

A operação **CREATE** é usada para adicionar novos registros à tabela.

**Comando:**
```sql
INSERT INTO usuarios (nome, email, idade)
VALUES ('João Silva', 'joao@email.com', 30),
       ('Maria Oliveira', 'maria@email.com', 28),
       ('Pedro Santos', 'pedro@email.com', 35);
```


### **2. READ - Lendo Dados**

A operação **READ** permite buscar e visualizar dados da tabela.

### **Leitura Simples (Todos os Dados)**

**Comando:**
```sql
SELECT * FROM usuarios;
```

**Com filtros**

**Comando:**
```sql
SELECT * FROM usuarios WHERE idade > 20;
```


### **3. UPDATE - Atualizando Dados**

A operação **UPDATE** é usada para modificar informações existentes na tabela.

### **Atualização Simples**

**Comando:**
```sql
UPDATE usuarios
SET idade = 31
WHERE id = 1;
```

### **Atualização com Filtros**

**Comando:**
```sql
UPDATE usuarios
SET email = 'novo@email.com'
WHERE nome = 'Maria Oliveira';
```


### **4. DELETE - Deletando Dados**

A operação **DELETE** é usada para remover registros da tabela.

### **Deletando um Registro Específico**

**Comando:**
```sql
DELETE FROM usuarios WHERE id = 2;
```

### **Deletando Todos os Dados**

**Comando:**
```sql
DELETE FROM usuarios;
```