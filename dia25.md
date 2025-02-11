<!-- GIT -->

### **📌 O que é Git?**

O **Git** é um sistema de controle de versão distribuído. Isso significa que ele rastreia as mudanças em arquivos ao longo do tempo, permitindo que você:

- **Colabore** com outros desenvolvedores.
- **Volte no tempo**, caso algo dê errado no projeto.
- **Organize** seu código em diferentes versões ou funcionalidades (branches).

💡 Criado por **Linus Torvalds** em 2005, o Git se tornou uma das ferramentas mais usadas no mundo da programação. Ele é a base de plataformas como **GitHub**, **GitLab** e **Bitbucket**.

### **🔍 Como o Git funciona?**

O Git organiza o seu código em três áreas principais:

1. **Workspace:** Onde você edita seus arquivos no projeto.
2. **Staging Area:** Onde você prepara os arquivos para o próximo commit.
3. **Repository:** Onde o histórico de commits é armazenado.

💡 **Fluxo básico do Git:**

1. Modifique os arquivos no **workspace**.
2. Adicione os arquivos à **staging area** usando `git add`.
3. Salve as mudanças no **repositório** com `git commit`.


### **💪 Exercícios Práticos**

1. **Inicie um novo repositório:**
    - Crie uma pasta chamada `meu_projeto` e inicialize o Git nela.
2. **Faça um commit inicial:**
    - Crie um arquivo `README.md`, adicione ao staging e faça o commit.
3. **Crie e mude para uma branch chamada `nova_funcionalidade`.**
4. **Faça alterações no `README.md`, adicione e faça um commit nessa branch.**
5. **Volte para a branch principal e veja que as alterações ainda não estão lá.**
6. **Faça o merge da branch `nova_funcionalidade` na branch principal.**

---

### **🛠️ Dicas Importantes**

- **Mensagens de Commit:** Sempre escreva mensagens claras e descritivas.
- **Cuidado com Conflitos:** Conflitos ao fazer `merge` são normais, resolva com paciência.
- **Documentação Oficial:** Consulte sempre a [documentação do Git](https://git-scm.com/doc).