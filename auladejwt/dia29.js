// JWT (JSON WEB TOKEN)

// EXERCÍCIOS PRÁTICOS

const jwt = require("jsonwebtoken")

// 1, 2 e 4:
const payload = {
    id: 72,
    usuario: "bruno",
    cargo: "administrador"
}

// a "chaveSecreta" serve para que o token que foi gerado, tenha uma autenticidade, que, a "chaveSecreta" que está sendo usada para verificar o token JWT precisa ser a mesma chave secreta em que foi usada para gerar o token.
// o token é assinado com essa "chaveSecreta"

const chaveSecreta = "minha_chaveSecreta";
const tokenRecebido = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";

const token = jwt.sign(payload, chaveSecreta, { expiresIn: "1h"});
console.log("Token JWT:", token)

try {
    const dados = jwt.verify(tokenRecebido, chaveSecreta);
    console.log("Token válido:", dados);
} catch (error) {
    console.error("Token inválido", error.message)
}

// 3:
const minhaChaveSecreta = 'chave_secreta'

// a função "gerarTokenJWT" vai gerar um tokenJWT para o payload, assinando na variável "minhaChaveSecreta" e então retornar o token que está na variavél "token"
function gerarTokenJWT(usuario) {
    const payload = {
      id: usuario.id,
      nome: usuario.nome,
    };
  
    const token = jwt.sign(payload, minhaChaveSecreta); // Assina o token com uma chave secreta
  
    return token;
}
 
// verifica usando o try/catch se o tokenJWT gerado foi assinado pela "minhaChaveSecreta", se TRUE então retorna o payload onde possui as infos. do usuário, se FALSE então retorna "null", indicando que o token é inválido
function validarTokenJWT(token) {
    try {
      const payload = jwt.verify(token, minhaChaveSecreta); // Verifica o token com a chave secreta
      return payload;
    } catch (erro) {
      return null; // Token inválido
    }
}
  
const usuario = { id: 1, nome: 'Exemplo' };
const token2 = gerarTokenJWT(usuario);
console.log('Token JWT:', token2);
  
const payload2 = validarTokenJWT(token2);
if (payload2) {
    console.log('Token válido:', payload2);
} else {
    console.log('Token inválido');
}