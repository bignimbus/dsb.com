var _ = require('underscore'),
    Backbone = require('backbone'),
    Mn = require('backbone.marionette');

module.exports = Mn.CollectionView.extend({
    "interval": 300,
    "initialize": function (opts) {
        'use strict';
        if (opts.fetch !== false) {
            this.collection.fetch();
        }
    },
    "hidePage": function (fn) {
        'use strict';
        this.$el.fadeOut(this.interval, fn);
    },
    "showPage": function (fn) {
        'use strict';
        this.$el.fadeIn(this.interval, fn);
    }
});
