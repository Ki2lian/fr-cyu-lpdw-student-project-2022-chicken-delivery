const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const bodyParser = require('body-parser')
const port = 3000
const router = require('./routes/router_warehouse')

app.use(router)
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Database connection
const db = require('../config/database')
db.sync()

db.authenticate()
    .then(() => console.log('Database Connected'))
    .catch(err => console.log('Error : ' +err))

const { Warehouse, Driver, Truck, LogTemp } = require('./models')

LogTemp.hasMany(Truck)

// app.get('/', (req, res) => {
//     res.send('Index of Chicken Logistics')
//     // app.use(router)
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})