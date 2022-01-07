const dbConfig = require('../../config/db.config.js')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false, 
    
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.warehouses = require('./Warehouses')(sequelize, Sequelize);
db.trucks = require('./Trucks')(sequelize, Sequelize);
db.drivers = require('./Drivers')(sequelize, Sequelize);
db.transfers = require('./Transfers')(sequelize, Sequelize);
db.logtemps = require('./LogTemps')(sequelize, Sequelize);

db.transfers.belongsTo(db.warehouses, { as: "warehouses"});
db.transfers.belongsTo(db.trucks, { as: "trucks"});
db.transfers.belongsTo(db.drivers, { as: "drivers"});
db.logtemps.belongsTo(db.transfers, { as: "transfers" });

module.exports = db