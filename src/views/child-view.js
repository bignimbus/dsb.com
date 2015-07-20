var _ = require('underscore'),
    Backbone = require('backbone'),
    Mn = require('backbone.marionette');

module.exports = Mn.ItemView.extend({
    "interval": 300,
    "hidePage": function (fn) {
        'use strict';
        this.$el.fadeOut(this.interval, fn);
    },
    "showPage": function (fn) {
        'use strict';
        this.$el.fadeIn(this.interval, fn);
    }
});
