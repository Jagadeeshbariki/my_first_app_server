var express = require('express');
var router = express.Router();

// int his file we are practicing the data transferme from client to server by 4 types
// 1. querty params
// 2. path parameter
// 3. request head
// 4. request body

/* GET users listing. */
router.get('/userInfo-query-rest', function(req, res, next) {
  const {name, loc}= req.query;
  res.send(`Hello! this is ${name}, from ${loc}`);
});


router.post('/userInfo-path-rest/:name/:loc', function(req, res, next) {
  const {name, loc}= req.params;
  res.send(`Hello! this is ${name}, from ${loc}`);
});

router.put('/userInfo-headers-rest', function(req, res, next) {
  const {name, loc}= req.headers;
  res.send(`Hello! this is ${name}, from ${loc}`);
});

router.delete('/userInfo-body-rest', function(req, res, next) {
  const {name, loc}= req.headers;
  res.send(`Hello! this is ${name}, from ${loc}`);
});



module.exports = router;
