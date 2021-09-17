const Sequelize = require('sequelize')
const db = require('../../config/database')

const transfer = db.define('transfer', {
    Collect: {
        type: Sequelize.BOOLEAN
    },
    NbChicken: {
        type: Sequelize.INTEGER
    },
})

module.exports = transfer