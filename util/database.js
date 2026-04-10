const Sequelize = require('sequelize');

const sequelize = new Sequelize('myDatabase','root','nodecomplete',{dialect:'mysql',host:'localhost'});

module.exports = sequelize;