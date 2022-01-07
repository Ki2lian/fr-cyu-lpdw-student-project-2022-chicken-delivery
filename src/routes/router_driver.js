module.exports = app => {
    const drivers = require('../controllers/driver.js')
    let router = require('express').Router()
    
    router.get(`/`, drivers.findAll)
    router.get(`/:id`, drivers.findOne)
    router.post('/create', drivers.create)

    app.use('/api/drivers', router)
}