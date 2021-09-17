const Sequelize = require('sequelize')
const db = require('../../config/database')

const Truck = db.define('truck', {
    Plate: {
        type: Sequelize.STRING
    },
    Capacity: {
        type: Sequelize.STRING
    }
})

module.exports = Truck