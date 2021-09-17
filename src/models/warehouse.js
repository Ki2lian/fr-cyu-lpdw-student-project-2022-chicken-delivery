const Sequelize = require('sequelize')
const db = require('../../config/database')

const warehouse = db.define('warehouse', {
    Name: {
        type: Sequelize.STRING
    },
    City: {
        type: Sequelize.STRING
    }
})

module.exports = warehouse