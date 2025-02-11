const { Sequelize } = require('sequelize');

// Conectando ao banco de dados PostgreSQL

// 'crud' => nome do banco // 'postgres' => usuário do banco // 'senha123' => senha do banco
const sequelize = new Sequelize('crud', 'postgres', 'senha123', {
  host: 'localhost',
  dialect: 'postgres', //indica o tipo de Banco sendo usado
});

module.exports = sequelize;