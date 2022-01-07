// const Sequelize = require('sequelize')
// const { Truck } = require('.')
// const db = require('../../config/database')

// const Logtemp = db.define('logtemp', {
//     Temp: {
//         type: Sequelize.DECIMAL(10,2)
//     },
//     Timestamp: {
//         type: Sequelize.DATE
//     },
//     Coordonate: {
//         type: Sequelize.TEXT
//     },
//     Hash: {
//         type: Sequelize.STRING
//     }
// })

// module.exports = Logtemp

module.exports = (sequelize, Sequelize) => {
    const Logtemp = sequelize.define('logtemp', {
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
    return Logtemp
}