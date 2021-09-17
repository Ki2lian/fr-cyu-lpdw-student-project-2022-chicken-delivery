const Sequelize = require('sequelize')
const db = require('../../config/database')

const driver = db.define('driver', {
    Lastname: {
        type: Sequelize.STRING
    },
    Firstname: {
        type: Sequelize.STRING
    }
})

module.exports = driver