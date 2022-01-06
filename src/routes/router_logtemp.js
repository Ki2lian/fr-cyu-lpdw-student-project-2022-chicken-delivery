const express = require('express')
const router = express.Router()

const db = require('../../config/database')
const { LogTemp } = require('../models')

router.get('/logtemps', (req, res) => {
    LogTemp.findAll()
        .then(logtemps => {
            res.json(logtemps)
        })
        .catch(err => console.log('Error : ' +err))
})

module.exports = router