var express = require('express');
var router = express.Router();

var stock = require('../controllers/Stock')


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


router.get('/test', function(req, res, next) {
    stock.getStock(req, res, next);
});
router.get('/test/:name', function(req, res, next) {
    stock.getStockByName(req, res, next, req.params.name);
});

router.post('/test', function(req, res, next) {
    stock.addStock(req, res, next);
});


module.exports = router;
