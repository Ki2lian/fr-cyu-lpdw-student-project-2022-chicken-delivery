const sequelize = require('sequelize')

const db = require('../../config/database')

const city = db.define('city', {
    name: {
        type: sequelize.STRING
    },
    adress:{
        type: sequelize.STRING
    }
    }
)
module.exports=city;