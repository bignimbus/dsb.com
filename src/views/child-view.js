var $ = require('jquery'),
    Backbone = require('backbone'),
    Mn = require('backbone.marionette');

module.exports = Mn.ItemView.extend({
    "interval": 500,
    "onBeforeDestroy": function () {
        'use strict';
        this.$el.fadeOut(this.interval);
    },
    "onRender": function () {
        'use strict';
        this.$el.fadeIn(this.interval);
    }
});
