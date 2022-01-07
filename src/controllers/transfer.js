const { drivers } = require('../models')
const db = require('../models')
const Transfer = db.transfers
// const Op = db.Sequelize.Op

exports.findAll = (req, res) => {
    Transfer.findAll({ include: ["warehouses", "trucks", "drivers"] })
    .then( data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error occured while retrieving transfers"
        })
    })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    Transfer.findByPk(id, { include: ["warehouses", "trucks", "drivers"] })
    .then( data => {
        if (data) res.json(data)
        else res.status(404).send({message: `Cannot find transfer with id : ${id}`})
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || `Error occured while retrieving transfer with id : ${id}`
        })
    })
}

exports.create = (req, res) => {
    if ( !req.body.collect || !req.body.nbChicken || !req.body.truckId || !req.body.warehouseId || !req.body.driverId ) {
        res.status(400).send({message: "collect, nbChicken, truckId, warehouseId or driverId missing"})
        return
    }
    Transfer.create({
        Collect: req.body.collect,
        NbChicken: req.body.nbChicken,
        trucksId: req.body.truckId,
        warehousesId: req.body.warehouseId,
        driversId: req.body.driverId,
    })
    .then( () => {
        res.send({message: `Transfer created with collect: ${req.body.collect}, nbChicken: ${req.body.nbChicken}, truckId: ${req.body.truckId}, warehouseId: ${req.body.warehouseId}, driverid: ${req.body.driverId}`})
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || `Error occured while creating transfer`
        })
    })
}