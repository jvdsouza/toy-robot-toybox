var router = require('express').Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('toy robot index');
});

module.exports = router;
