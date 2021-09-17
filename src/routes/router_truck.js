const express = require('express')
const router = express.Router()

const db = require('../../config/database')
const { Truck } = require('../models')

router.get('/trucks', (req, res) => {
    Truck.findAll()
        .then(trucks => {
            res.json(trucks)
        })
        .catch(err => console.log('Error : ' +err))
})

module.exports = router