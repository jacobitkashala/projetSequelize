const Sequelize = require("sequelize");

const db = new Sequelize("keshocongo", "jaco", "1234",
{
    host: "localhost",
    dialect:"mysql"
})
module.exports = db;