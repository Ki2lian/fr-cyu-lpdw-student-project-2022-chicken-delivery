const Sequelize = require('sequelize')
const db = require('../../config/database')

const Transfer = db.define('transfer', {
    Collect: {
        type: Sequelize.BOOLEAN
    },
    NbChicken: {
        type: Sequelize.INTEGER
    },
    Timestamp: {
        type: Sequelize.DATE
    }
})

module.exports = Transfer