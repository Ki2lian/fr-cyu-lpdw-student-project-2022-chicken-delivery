const express = require('express')
const router = express.Router()

const db = require('../../config/database')
const { Transfer } = require('../models')

router.get('/transfers', (req, res) => {
    Transfer.findAll()
        .then(transfers => {
            res.json(transfers)
        })
        .catch(err => console.log('Error : ' +err))
})

module.exports = router