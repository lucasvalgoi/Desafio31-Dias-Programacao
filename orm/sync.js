const sequelize = require('./database');
const Usuario = require('./Usuario');

async function sincronizarBanco() {
  try {
    await sequelize.sync({ force: true }); // Cria as tabelas
    console.log('Banco sincronizado com sucesso!');
  } catch (error) {
    console.error('Erro ao sincronizar o banco:', error);
  }
  //é necessário tirar esse trecho, para que o Banco não feche toda vez que for sincronizar os dados da API com o BD.
  // finally {
  //   sequelize.close();
  // }
}

module.exports = { sincronizarBanco }