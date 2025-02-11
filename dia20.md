<!-- BANCO DE DADOS - SQL com DOCKER -->

<!-- EXERCÍCIOS PRÁTICOS NO BEEKEPERSTUDIO -->

### **⚙️ Rodando PostgreSQL com Docker**

Para seguir a prática, vamos rodar um banco de dados PostgreSQL usando o Docker.

1. **Certifique-se de ter o Docker instalado:**
    - [Baixe o Docker Desktop](https://www.docker.com/products/docker-desktop) e instale no seu sistema.
2. **Execute o comando abaixo para iniciar um container PostgreSQL:**
    
    ```bash
    docker run --name desafio-postgres -e POSTGRES_PASSWORD=senha123 -p 5432:5432 -d postgres
    ```
    
    - **`-name desafio-postgres`**: Dá um nome ao container.
    - **`e POSTGRES_PASSWORD=senha123`**: Define a senha para o usuário `postgres`.
    - **`p 5432:5432`**: Expõe a porta 5432 (usada pelo PostgreSQL).
    - **`d postgres`**: Especifica a imagem do PostgreSQL.
3. **Conecte-se ao banco:**
    - Use uma ferramenta como **DBeaver** ou **BeekeperStudio**.
    - Host: `localhost`, Porta: `5432`, Usuário: `postgres`, Senha: `senha123`..