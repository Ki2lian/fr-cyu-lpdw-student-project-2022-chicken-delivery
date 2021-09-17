const Sequelize = require('sequelize')
const db = require('../../config/database')
// const LogTemp = require('./LogTemp')

const Truck = db.define('truck', {
    Plate: {
        type: Sequelize.STRING
    },
    Capacity: {
        type: Sequelize.STRING
    }
})

// Truck.hasMany(LogTemp, {as: "LogTemp"})

module.exports = Truck