var express = require('express');
var router = express.Router();

router.get('/300x250', function(req, res, next) {
  res.render('300x250', { title: '300x250 Example' });
});

router.get('/mwi', function(req, res, next) {
  res.render('mwi', { title: 'Mobile Web Insterstial' });
});

router.get('/range-size', function(req, res, next) {
  res.render('range-size', { title: 'Ranged Size Tagging Example' });
});

router.get('/web-anchor', function(req, res, next) {
  res.render('web-anchor', { title: 'Mobile Web Anchor' });
});

router.get('/', function(req, res, next) {
  console.log(req.headers);
  let ldap = req.headers['x-appengine-user-nickname'] || 'localhost';
  res.render('index', { username: ldap });
});




module.exports = router;
