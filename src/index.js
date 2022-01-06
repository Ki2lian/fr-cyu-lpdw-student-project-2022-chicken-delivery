const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const bodyParser = require('body-parser')
const port = 3000
const { router_warehouse, router_driver, router_truck, router_logtemp, router_transfer } = require('./routes')

app.use(router_warehouse, router_driver, router_truck, router_logtemp, router_transfer)
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Database connection
const db = require('../config/database')
db.sync()

db.authenticate()
    .then(() => console.log('Database Connected'))
    .catch(err => console.log('Error : ' +err))

const { Warehouse, Driver, Truck, LogTemp } = require('./models')

// app.get('/', (req, res) => {
    //     res.send('Index of Chicken Logistics')
    //     // app.use(router)
    // })
    
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

/*app.get('/hash', (req, res) => {
  if(req.query.hash){
    var type = "sha1exit";
    var hash = crypto.createHash(type).update(req.query.hash).digest('hex');
    res.json({
      'word': req.query.hash,
      'type': type,
      'hash': hash
    });
  }else{
    res.status(400).json({
      "code": 400,
      "message": "invalid parameter"
    });
  }
});*/