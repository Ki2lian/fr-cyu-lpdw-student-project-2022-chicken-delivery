module.exports = app => {
    const warehouses = require('../controllers/warehouse.js')
    let router = require('express').Router()
    
    router.get(`/`, warehouses.findAll)
    router.get(`/:id`, warehouses.findOne)
    router.post('/create', warehouses.create)

    app.use('/api/warehouses', router)
}