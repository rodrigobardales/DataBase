const Sequelize = require('sequelize');
const db = require('../index.js');

const users = db.define('users', {
  nombredeusuario: {
    type: Sequelize.STRING,
    allowNull: false
  },
  constrasena: {
    type: Sequelize.STRING,
    allowNull: false
  },
  rol_nombre: {
    type: Sequelize.STRING,
    allowNull: false
  },
  persona_codigo: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  contact_email: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = users;