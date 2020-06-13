const Sequilize = require("sequilize")
const { Sequelize } = require("sequelize/types")
const dbA = {};
const sequilize = new Sequelize("dba", "root", "", {
	host: "localhost",
	dialect: "mariadb",
	operatorsAliases: false,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
})

dbA.Sequelize = Sequelize;
dbA.sequelize = sequelize;

module.exports = dbA;


// const dbAConfig = require("../config/dbA.config.js");

// const Sequelize = require("sequelize");
// const sequelize = new Sequelize(dbAConfig.DB, dbAConfig.USER, dbAConfig.PASSWORD, {
// 	host: dbAConfig.HOST,
// 	dialect: dbAConfig.dialect,
// 	operatorsAliases: false,
// 	pool: {
// 		max: dbAConfig.pool.max,
// 		min: dbAConfig.pool.min,
// 		acquire: dbAConfig.pool.acquire,
// 		idle: dbAConfig.pool.idle
// 	}
// });

// const dbA = {};

// dbA.Sequelize = Sequelize;
// dbA.sequelize = sequelize;

// dbA.clients = require("./client.model.js")(sequelize, Sequelize);

// module.exports = dbA;