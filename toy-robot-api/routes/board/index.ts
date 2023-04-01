import { Board } from '../../services/board';

var router = require('express').Router();

/* GET */
router.get('/get/:id', function(req, res) {
  res.send(req.params.id);
});

router.get('/create', function(req, res) {
  req.accepts('application/json');

  const length: number = req.body.length;
  const width: number = req.body.width;
  const obstacles: [number, number][] = req.body.obstacles;

  const board = new Board(length, width, obstacles);
  const id = 1;

  res.send({
    success: true,
    id,
  });
});


module.exports = router;
