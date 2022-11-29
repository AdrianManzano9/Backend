var Sequelize = require('sequelize');
var sequelize = require('../config/mysql');

var Products= sequelize.define('product',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true 
    },
    name: Sequelize.STRING,
    image:Sequelize.TEXT,
    descrip: Sequelize.STRING,
    precio: Sequelize.DOUBLE,
    cant: Sequelize.INTEGER,
    cantD: Sequelize.INTEGER,
});

module.exports= Products;