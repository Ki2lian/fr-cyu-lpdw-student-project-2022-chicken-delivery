module.exports = app => {
    const logtemps = require('../controllers/logtemp.js')
    let router = require('express').Router()
    
    router.get(`/`, logtemps.findAll)
    router.get(`/:id`, logtemps.findOne)
    router.post('/create', logtemps.create)

    app.use('/api/logtemps', router)
}