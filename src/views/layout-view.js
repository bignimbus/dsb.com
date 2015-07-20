var _ = require('underscore'),
    Backbone = require('backbone'),
    Mn = require('backbone.marionette');

module.exports = Mn.LayoutView.extend({
    "interval": 300,
    "hidePage": function (fn) {
        'use strict';
        this.$el.fadeOut(this.interval, fn);
    },
    "showPage": function (fn) {
        'use strict';
        this.$el.fadeIn(this.interval, fn);
    },
    "hideElement": function (selector) {
        'use strict';
        this.$(selector).fadeOut(this.interval);
    }
});
