const Usuario = require('./Usuario');
const { Sequelize } = require('sequelize');

async function listarUsuarios() {
  try {
    return await Usuario.findAll()

    // const usuariosFiltrados = await Usuario.findAll({
    //     where: { idade: { [Sequelize.Op.gt]: 30 } },
    // });
    // console.log(usuariosFiltrados);
    // const usuarios = await Usuario.findAll();
    // console.log(usuarios);
  } catch (error) {
    console.error('Erro ao listar usuários:', error);
  }
}

module.exports = { listarUsuarios }