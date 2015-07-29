var Backbone = require('backbone'),
    moment = require('moment');

module.exports = Backbone.Collection.extend({
    "url": "http://jdauriemma.startlogic.com/dsb/get-reviews.php",
    "comparator": function (a, b) {
        var isBefore = moment(a.get('date')).isBefore(moment(b.get('date')));
        if (isBefore) {
            return 1;
        } else {
            return -1;
        }
    }
});
