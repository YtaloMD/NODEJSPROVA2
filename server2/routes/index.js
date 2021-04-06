var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', link: "/login", 
  array: [
      "elem 1",
      "elem 2",
      "elem 3",
      "elem 4",
      "elem 5",

  ]});
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Animated Login'  });
});

module.exports = router;
