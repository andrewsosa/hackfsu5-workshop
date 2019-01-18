var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.json({
    names: ['Andrew', 'Keishon', 'Cameron']
  });

});

router.get('/id/:username', function(req, res, next) {

  let username = req.params.username;

  res.send(username);

});

router.post('/', function(req, res, next) {

  let username = req.body.username,
      password = req.body.password;

  // make account

  res.send(`Made account for ${username}`);

});


module.exports = router;
