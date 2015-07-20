var _ = require('underscore'),
    Backbone = require('backbone');

module.exports = Backbone.Collection.extend({
    "index": 0,
    "url": "http://jdauriemma.startlogic.com/dsb/get-events.php",
    "comparator": function (model) {
        'use strict';
        return +model.get('time');
    },
    "parse": function (response) {
        'use strict';
        if (response.first) {
            console.log('first');
            this.first = true;
            _.delay(_.bind(this.trigger, this, 'first'), 4000);
        }
        if (response.last) {
            console.log('last');
            this.last = true;
            _.delay(_.bind(this.trigger, this, 'last'), 4000);
        }
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
