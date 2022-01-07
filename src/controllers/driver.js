const db = require('../models')
const Driver = db.drivers
// const Op = db.Sequelize.Op

exports.findAll = (req, res) => {
    Driver.findAll()
    .then( data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error occured while retrieving drivers"
        })
    })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    Driver.findByPk(id)
    .then( data => {
        if (data) res.json(data)
        else res.status(404).send({message: `Cannot find driver with id : ${id}`})
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || `Error occured while retrieving driver with id : ${id}`
        })
    })
}

exports.create = (req, res) => {
    if ( !req.body.lastname || !req.body.firstname ) {
        res.status(400).send({message: "Lastname or firstname missing"})
        return
    }
    Driver.create({
        Lastname: req.body.lastname,
        Firstname: req.body.firstname
    })
    .then( () => {
        res.send({message: `Driver created with lastname: ${req.body.lastname} and firstname: ${req.body.firstname}`})
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || `Error occured while creating driver`
        })
    })
}