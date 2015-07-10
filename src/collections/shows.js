var Backbone = require('backbone');

module.exports = Backbone.Collection.extend({
    "index": 0,
    "url": "http://jdauriemma.startlogic.com/dsb/get-events.php",
    "comparator": function (model) {
        'use strict';
        return +model.get('time');
    },
    "parse": function (response) {
        'use strict';
        this.index = response.index;
        return response.data;
    },
    "getIncrement": function (back) {
        'use strict';
        var increment = back ? this.index - 20 : this.length + this.index;
        if (increment < 0) {
            increment = 0;
        }
        this.fetch({
            "remove": false,
            "data": {
                "index": increment
            }
        });
    }
});
