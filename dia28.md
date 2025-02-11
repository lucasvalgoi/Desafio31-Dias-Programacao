<!-- conteúdo teórico -->

## AUTENTICAÇÃO E AUTORIZAÇÃO

### **📌 O que é Autenticação?**

A **autenticação** é quando se realiza o processo de responder a pergunta: **"Quem é você?"**
    - Esse processo verifica a identidade do usuário ou sistema que está tentando acessar

💡 **Como funciona?**
- **Login e Senha:** O usuário fornece credenciais que são verificadas no banco de dados.
- **Biometria:** Reconhecimento facial, impressão digital ou até voz são usadas para autenticar.
- **Autenticação Multifator (MFA):** Um segundo fator, como um código enviado ao celular, oferece mais segurança (autenticação de dois fatores, por exemplo).

📌 **Exemplo do mundo real:**

Quando você insere sua senha para acessar sua conta do banco, está sendo realizada uma autenticação para verificar os dados.


### **📌 O que é Autorização?**

A **autorização** é quando realiza o processo de responder a pergunta: **"O que você pode fazer?"**
    - É controlado quais recursos ou ações estão disponíveis para o usuário ou sistema autenticado.

💡 **Como funciona?**
- **Funções e Papéis (Role-Based Access Control - RBAC):** Um administrador pode editar e deletar dados de uma conta, enquanto um usuário comum só pode visualizá-los.
- **Atributos (Attribute-Based Access Control - ABAC):** Permissões são baseadas em atributos como localização ou horário de acesso.

📌 **Exemplo do mundo real:**
Depois de fazer login no sistema do banco, você pode acessar sua conta, mas não as contas de outros clientes.

### **🔍 Diferença entre Autenticação e Autorização**

| **Autenticação** | **Autorização** |
| --- | --- |
| Responde à pergunta: "Quem é você?" | Responde à pergunta: "O que você pode fazer?" |
| Garante que o usuário é quem diz ser | Define o que o usuário pode acessar |
| Ocorre antes da autorização | Ocorre após a autenticação |
| Exemplo: Inserir senha ou biometria | Exemplo: Permissão para excluir um arquivo |

---

### **🔑 Métodos de Autenticação**

### 1. *Autenticação em Senha:* (método mais comum)
    - É quando o usuário fornece uma senha junto com seu nome de usuário, eles são comparados com os dados armazenados no banco de dados; se validar retornará o acesso garantido, senão, retornará o acesso negado

### 2. *Autenticação de Multifatores (MFA):*
    - Exige um segundo fator para autenticar, adicionando uma camada extra de segurança para a conta, como por exemplo:
        - Token gerado por algum autenticador.
        - Código enviado por e-mail.

### 3. **Biometria:**

     - Usa características físicas do usuário, como impressão digital ou reconhecimento facial.

### 4. **Single Sign-On (SSO):**

    - Permite que o usuário acesse várias aplicações com uma única autenticação.


### **🔐 Métodos de Autorização**

### 1. **Role-Based Access Control (RBAC):**

     - Permissões atribuídas com base em papéis definidos no sistema, como de admin, usuário, editor e etc.

### 2. **Attribute-Based Access Control (ABAC):**

    - Permissões baseadas em atributos do usuário ou do ambiente, como permitir acesso pelo horário ou pela localização.

### 3. **Access Control Lists (ACLs):**

    - Definem explicitamente quais usuários ou grupos têm acesso a cada recurso.

## *Fluxo de Autenticação e Autorização:*
    - Usuário fornece dados do login e senha do banco;
    - O sistema verifica (autentica) os dados e se válido, será gerado um token de acesso;
    - O servidor validará a identidade do usuário, através das credenciais e do token que foi gerado;
    - Ocorre a verificação das permissões do usuário antes de ser executado a ação.


---

#### *Arquivo dos exercícios práticos:*
- [dia28.js](./dia28.js)