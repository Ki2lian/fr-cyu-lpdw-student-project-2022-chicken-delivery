const express = require('express')
const router = express.Router()

const db = require('../../config/database')
const { Driver } = require('../models')

router.get('/drivers', (req, res) => {
    Driver.findAll()
        .then(drivers => {
            res.json(drivers)
        })
        .catch(err => console.log('Error : ' +err))
})

module.exports = router