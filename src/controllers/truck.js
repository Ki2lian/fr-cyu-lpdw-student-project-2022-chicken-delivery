const db = require('../models')
const Truck = db.trucks
// const Op = db.Sequelize.Op

exports.findAll = (req, res) => {
    Truck.findAll()
    .then( data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error occured while retrieving trucks"
        })
    })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    Truck.findByPk(id)
    .then( data => {
        if (data) res.json(data)
        else res.status(404).send({message: `Cannot find truck with id : ${id}`})
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || `Error occured while retrieving truck with id : ${id}`
        })
    })
}

exports.create = (req, res) => {
    if ( !req.body.plate || !req.body.capacity ) {
        res.status(400).send({message: "Plate or capacity missing"})
        return
    }
    Truck.create({
        Plate: req.body.plate,
        Capacity: req.body.capacity
    })
    .then( () => {
        res.send({message: `Truck created with plate: ${req.body.plate} and city: ${req.body.capacity}`})
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || `Error occured while creating truck`
        })
    })
}