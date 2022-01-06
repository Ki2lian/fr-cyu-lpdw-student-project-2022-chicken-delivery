const Sequelize = require('sequelize')
const db = require('../../config/database')

const Warehouse = db.define('warehouse', {
    Name: {
        type: Sequelize.STRING
    },
    City: {
        type: Sequelize.STRING
    }
})

module.exports = Warehouse