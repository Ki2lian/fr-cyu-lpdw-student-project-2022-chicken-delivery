const express = require('express')
const router = express.Router()

const db = require('../../config/database')
const { Warehouse } = require('../models')

router.get('/warehouses', (req, res) => {
    Warehouse.findAll()
        .then(warehouses => {
            res.json(warehouses)
        })
        .catch(err => console.log('Error : ' +err))
})

module.exports = router