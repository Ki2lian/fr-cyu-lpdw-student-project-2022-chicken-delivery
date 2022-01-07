module.exports = app => {
    const transfers = require('../controllers/transfer.js')
    let router = require('express').Router()
    
    router.get(`/`, transfers.findAll)
    router.get(`/:id`, transfers.findOne)
    router.post('/create', transfers.create)

    app.use('/api/transfers', router)
}