const db = require('../models')
const crypto = require('crypto')
const LogTemp = db.logtemps
// const Op = db.Sequelize.Op

exports.findAll = (req, res) => {
    LogTemp.findAll({ include: ["transfers"] })
    .then( data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error occured while retrieving logtemps"
        })
    })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    LogTemp.findByPk(id, { include: ["transfers"] })
    .then( data => {
        if (data) res.json(data)
        else res.status(404).send({message: `Cannot find logtemp with id : ${id}`})
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || `Error occured while retrieving logtemp with id : ${id}`
        })
    })
}

exports.create = (req, res) => {
    if ( !req.body.temp || !req.body.coordonate || !req.body.transferId ) {
        res.status(400).send({message: "temp, coordonate, transferId missing"})
        return
    }
    let hash = ''
    const lastRecord = LogTemp.findOne({
        order: [ [ 'id', 'DESC' ] ]
    })
    .then( data => {
        if (!data) {
            res.status(404).send({message: `Error occured`})
            return
        }
        const stringtoHash = `${data.id}${data.Hash}${data.transfersId}`
        hash = crypto.createHash('sha512').update(stringtoHash).digest('hex')
        LogTemp.create({
            Temp: req.body.temp,
            Coordonate: req.body.coordonate,
            transfersId: req.body.transferId,
            Hash: hash
        })
        .then( () => {
            res.send({message: `Logtemp created with temp: ${req.body.temp}, coordonate: ${req.body.coordonate}, transferId: ${req.body.transferId}`})
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Error occured while creating logtemp`
            })
        })
    })
}