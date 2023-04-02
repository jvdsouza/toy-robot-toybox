var router = require('express').Router();

/* GET */
router.get('/get/:id', function(req, res) {
  res.send({
    id: req.params.id,
  });
});

router.get('/create', function(req, res) {
  res.send({
    body: req.body
  })
});

router.get('/place/:id', function(req, res) {
  res.send({
    body: req.body
  });
});

router.get('/move', function(req, res) {
  res.send({
    body: req.body
  });
});

router.get('/turn', function(req, res) {
  res.send({
    body: req.body
  });
});

router.get('/report', function(req, res) {
  res.send({
    body: req.body
  });
});

module.exports = router;
