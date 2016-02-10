
module.exports = function(db) {

};
module.exports.prototype = {

    extend: function(properties) {
        this.db =  global.db;
        var Child = module.exports;
        Child.prototype = module.exports.prototype;
        for(var key in properties) {
            Child.prototype[key] = properties[key];
        }

        return Child;
    },
    collection: function() {
        if(this._collection) return this._collection;
        this.db = global.db;
        return this._collection = this.db.collection('Stock');
    }
}