# **FRONTEND X BACKEND**

### *Exercícios Práticos:*

1. **Identifique Componentes:**    
    Escolha um site que você usa regularmente e identifique o que faz parte do Frontend e o que depende do Backend.
&rarr; *Youtube:*
    - *Frontend:*
        - Mostra os vídeos para o usurário;
        - Botões de início, inscrições, acessar conta, notificações e etc.
    - *Backend:*
        - Gera os vídeos;
        - Armazena as inscrições do usuário;
        - Sugere uma recomendação dos vídeos de acordo com o gosto do usuráio;

2. **Simule a Comunicação:**
    Desenhe um fluxo simples mostrando como os dados viajam entre Frontend e Backend em uma ação, como pesquisar um vídeo
&rarr; *Fluxo:*
    - *1. Frontend:*
        - O usuário clica na barra de pesquisas;
        - Digita o título do vídeo;
        - A interface envia os dados para o backend;
    - *2. Backend:*
        - O backend recebe os dados que foram enviados;
        - Valida se o título do livro existe e está no servidor do Youtube;
        - Retorna caso haja no servidor, os vídeos com o mesmo título ou títulos similares;
        - Caso não tenha algum vídeo de mesmo título, mostra os de título similar;
    - *3. Frontend:*
        - Mostra os vídeos para o usuário de acordo com o retorno recebido;
        - O usuário clica no vídeo escolhido;