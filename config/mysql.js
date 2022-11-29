
const sequelize = require('sequelize')


const databaseMysql = new sequelize('test','root','',{
    host:'localhost',
    dialect:'mysql'
}
);
databaseMysql.sync();

module.exports = databaseMysql;