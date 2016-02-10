var BaseController = require("./BaseController"),
    model = new (require("../models/StockModel"));

module.exports = BaseController.extend({
    getStock: function(req, res, next) {
        model.getlist(function(err, records) {
            res.json({message: records});
        });
    },
    getStockByName: function(req, res, next, name) {
        model.getlist(function(err, records) {
            res.json({message: records});
        }, {name:name});
    },
    addStock: function(req, res, next) {
        var id = '';
        model.getlist(function(err, records) {
            id = records[0]['_id'];
            var data = {
                name: req.body.name,
                price: req.body.price,
                _id : id,
            }
            model[id != '' ? 'update' : 'insert'](data);
        }, {name:req.body.name});
        res.json({message: 'success'});

    },
});