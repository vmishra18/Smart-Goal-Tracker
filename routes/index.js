var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index-list', function(req, res, next) {
  res.render('index-list', { title: 'Home' });
});

module.exports = router;
