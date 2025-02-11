// AUTENTICAÇÃO E AUTORIZAÇÃO

// EXERCÍCIOS PRÁTICOS

// 1:
const users = [{
    login: "lucasTeste",
    senha: "senha123"
},
{
    login: "joaozinho",
    senha: "senha1357"
},
{
    login: "bruninha25",
    senha: "123456"
}
]

function autenticarUser(usuario, senha) {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const login = user.login;
        const password = user.senha;

        if (login === usuario && password === senha) {
            return true
        }
    }
    return false
}

const userAutenticado = autenticarUser("joaozinho", "senha1357")

if (userAutenticado) {
    console.log(`Usuário autenticado com sucesso`);
} else {
    console.log(`Erro na autenticação do usuário`);
}

// 2:
const papeisUsuairos = {
    "admin": ["/admin", "/perfil", "/gerenciamento"],
    "usuario": ["/profile"]
}

function checaPermissaoUsers(papel, funcionalidades) {
    if (papel === "admin") {
        return papeisUsuairos.admin.includes(funcionalidades);
    } else if (papel === "user") {
        return papeisUsuairos.usuario.includes(funcionalidades);
    } else {
        return false;
    }
}
const papelUsuairo = "usuario"
const funcionalidades = "/admin"
console.log(checaPermissaoUsers(papelUsuairo, funcionalidades))

if (checaPermissaoUsers(papelUsuairo, funcionalidades)) {
    console.log("Acesso garantido");
} else {
  console.log("Acesso negado");
}

// 3:
const codigoAutenticacao = "093506"

function checaTokenAutenticacao(token) {
    if (token === codigoAutenticacao) {
        console.log("Acesso concedido para realizar a transação da conta")
    } else {
        console.log("Acesso negado para realizar a transação na conta")
    }
}
checaTokenAutenticacao("093506")

// 4:
const permissoes = {
    admin: {
      visualizarPainel: true,
      gerenciarUsuarios: true,
      editarConfiguracoes: true,
      deletarConteudo: true,
    },
    editor: {
      visualizarPainel: true,
      editarConteudo: true,
    },
    leitor: {
      visualizarPainel: true,
    },
};

function checaPermissaoContaPerfil(funcaoPerfil, permissao) {
    // retorna a verificação se o parâmetro [funcao] existe no objeto "permissões"
    // retorna a verificação se o parâmetro [permissão] tem uma propriedade no parâmetro [funcao] dentro de "permissões"
    // e retorna a verificação se a [permissao] condiz com a [funcao] que está dentro do objeto "permissões"
    return permissoes[funcaoPerfil] && permissoes[funcaoPerfil].hasOwnProperty(permissao) && permissoes[funcaoPerfil][permissao]
}
console.log(checaPermissaoContaPerfil("admin", "deletarConteudo"));
console.log(checaPermissaoContaPerfil("leitor", "editarConfigurações"));
console.log(checaPermissaoContaPerfil("editor", "editarConteudo"));


// 5:
const cargoParaAcesso = {
    "estudante": {
        horaInicial: 15,
        horaFinal: 20,
    },
    "professor": {
        horaInicial: 0,
        horaFinal: 22,
    },
    "faxineiro": {
        horaInicial: 10,
        horaFinal: 19 
    }
};

function checarAcessoHorarios(cargo, tempo) {
    const horaAtual = tempo;
    const acesso = cargoParaAcesso[cargo] //atribui à variável os horários do cargo que for passado como parâmetro

    return horaAtual >= acesso.horaInicial && horaAtual <= acesso.horaFinal
}

const cargo = "professor"
const tempoAtual = 22

if (checarAcessoHorarios(cargo, tempoAtual)) {
    console.log("Acesso concedido")
} else {
    console.log("Acesso negado")
}

