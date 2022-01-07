const db = require('../models')
const Warehouse = db.warehouses
// const Op = db.Sequelize.Op

exports.findAll = (req, res) => {
    Warehouse.findAll()
    .then( data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error occured while retrieving warehouses"
        })
    })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    Warehouse.findByPk(id)
    .then( data => {
        if (data) res.json(data)
        else res.status(404).send({message: `Cannot find warhouse with id : ${id}`})
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || `Error occured while retrieving warehouse with id : ${id}`
        })
    })
}

exports.create = (req, res) => {
    if ( !req.body.name || !req.body.city ) {
        res.status(400).send({message: "name or city missing"})
        return
    }
    Warehouse.create({
        Name: req.body.name,
        City: req.body.city
    })
    .then( () => {
        res.send({message: `Warehouse created with name: ${req.body.name} and city: ${req.body.city}`})
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || `Error occured while creating warehouse`
        })
    })
}