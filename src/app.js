
const express = require('express')
const app = express()
const port = 3000
const router = require('./routes/cities.api')

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(router)




const db = require('../config/database')

var name = 'hello';
var crypto = require('crypto');  
var hash = crypto.createHash('sha1').update(name).digest('hex');

app.get('/HASH', (req, res) => {
  res.json(JSON.stringify({
    "0":name,
    "1":hash
  }))
})

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



//Test DB

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('error: '+err))

const{ warehouse, driver, truck, logTemp,transfer } = require('./models/index');
const logtemp = require('./models/logTemp');

logTemp.belongsTo(truck,{
  foreignKey:"fk_Truck",
  as:"idTruck"
})

transfer.belongsTo(truck,{
  foreignKey:"fk_Truck",
  as:"idTruck"
})
transfer.belongsTo(driver,{
  foreignKey:"fk_driver",
  as:"idDriver"
})
transfer.belongsTo(warehouse,{
  foreignKey:"fk_warehouse",
  as:"idWarehouse"
})
  db.sync()

