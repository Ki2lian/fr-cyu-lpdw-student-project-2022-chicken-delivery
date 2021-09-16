const express = require('express');
const crypto = require('crypto')
const app = express();
const port = 3000;

app.get('/hash', (req, res) => {
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
  
});

app.listen(port, () => {
  console.log(`APP running at http://localhost:${port}`)
});
