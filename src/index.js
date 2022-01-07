const express = require('express')
const cors = require('cors')

let corsOptions = {
  origin: "http://localhost:3000"
}

const app = express()

app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const db = require('./models')
db.sequelize.sync()
// db.sequelize.sync({force: true})

const port = 3000

app.get('/', (req, res) => {
    res.send('Index of Chicken Logistics')
})

require('./routes/index')(app)
    
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})