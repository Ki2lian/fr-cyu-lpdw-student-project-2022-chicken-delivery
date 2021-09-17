
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

const{ City, entrepot } = require('./models/index')

entrepot.belongsTo(City,{
  foreignKey:"CityId",
  as:"City"
})

  db.sync()

