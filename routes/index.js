var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/300x250', function(req, res, next) {
  res.render('300x250', { title: '300x250 Example' });
});

/* GET home page. */
router.get('/mwi', function(req, res, next) {
  res.render('mwi', { title: 'Mobile Web Insterstial' });
});

module.exports = router;
