const Usuario = require('./Usuario');

async function atualizarUsuario() {
  try {
    await Usuario.update(
      { email: 'joaosilva@gmail.com' },
      { where: { nome: 'João Silva' } }
    );
    console.log('Usuário atualizado com sucesso!');
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
  }
}

atualizarUsuario();