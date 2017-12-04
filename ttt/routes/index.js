var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Мій перший проект' });
});

router.get('/testajax', function(req, res, next) {
    res.send(JSON.stringify(data));

});
module.exports = router;

var xlsx = require('node-xlsx');
var fs = require('fs');
var data = xlsx.parse(`${__dirname}/file_old.xlsx`);
var data = xlsx.parse(fs.readFileSync(`${__dirname}/file_old.xlsx`));

