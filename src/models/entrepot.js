const sequelize = require('sequelize')
const city = require('./City')
const db = require('../../config/database')

const entrepot = db.define('entrepot', {
    name: {
        type: sequelize.STRING
    },
    adress:{
        type: sequelize.STRING
    }
    }
)
module.exports=entrepot;