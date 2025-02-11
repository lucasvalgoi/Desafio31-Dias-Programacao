const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const Usuario = sequelize.define('Usuario', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  idade: {
    type: DataTypes.INTEGER,
  },
  telefone: {
    type: DataTypes.STRING,
  }
});

module.exports = Usuario;