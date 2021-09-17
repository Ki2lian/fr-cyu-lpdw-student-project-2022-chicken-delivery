const Sequelize = require('sequelize')
const db = require('../../config/database')
// const Truck = require('./Truck')

const logtemp = db.define('logtemp', {
    Temp: {
        type: Sequelize.DECIMAL(10,2)
    },
    Coordonate: {
        type: Sequelize.TEXT
    },
    Hash: {
        type: Sequelize.STRING
    }
})

// Logtemp.hasOne(Truck)

module.exports = logtemp