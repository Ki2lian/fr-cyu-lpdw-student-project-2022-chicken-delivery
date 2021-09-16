const express = require('express')
const app = express()
const port = 3000

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