const Usuario = require('./Usuario');

async function criarUsuarios(nome, email, idade, telefone) {
  try {
    await Usuario.create({ nome, email, idade, telefone });
    
    //retirando as informações "chumbadas" que estão diretas no código e aplicar como parâmetros da função

    // await Usuario.create({ nome: 'João Silva', email: 'joao@email.com', idade: 30, telefone: '98754312' });
    console.log('Usuário criado com sucesso!');
  } catch (error) {
    console.error('Erro ao criar usuários:', error);
  }
}

module.exports = { criarUsuarios }