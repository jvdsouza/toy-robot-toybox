import { Board } from '../../services/board';

var router = require('express').Router();

/* GET */
router.get('/get/:id', function(req, res) {
  res.send(req.params.id)
});

router.get('/create', function(req, res) {
  res.send(req.body)
});


module.exports = router;
