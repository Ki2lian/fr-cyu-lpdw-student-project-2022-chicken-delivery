module.exports = app => {
    const trucks = require('../controllers/truck.js')
    let router = require('express').Router()
    
    router.get(`/`, trucks.findAll)
    router.get(`/:id`, trucks.findOne)
    router.post('/create', trucks.create)

    app.use('/api/trucks', router)
}