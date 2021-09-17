const express = require('express')
const crypto = require('crypto')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/sha1', (req, res) => {
    if (req.query.word == null || req.query.word == '') {
        res.status(400).json({'code' : 400, 'error' : "No word insert"})
        console.log("No word insert")
    } else {
        let hashedParam = crypto.createHash('sha1').update(req.query.word).digest('hex')
        res.json({
            'hash' : hashedParam
        })
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})