const Sequelize = require('sequelize')
const db = require('../../config/database')

const Driver = db.define('driver', {
    Lastname: {
        type: Sequelize.STRING
    },
    Firstname: {
        type: Sequelize.STRING
    }
})

module.exports = Driver