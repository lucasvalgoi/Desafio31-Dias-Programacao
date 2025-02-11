const Usuario = require('./Usuario');

async function deletarUsuarioPorId(id) {
  try {
    await Usuario.destroy({ where: { id } });
    console.log('Usuário deletado com sucesso!');
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
  }
}

module.exports = { deletarUsuarioPorId }