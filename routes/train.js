var express = require('express');
var router = express.Router();
var db=require('../databasee');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/training', function(req, res, next) {
    var sql='SELECT * FROM training';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('training', { title: 'Training', userData: data});
  });
});
module.exports = router;
