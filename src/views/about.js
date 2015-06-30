var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    template = require('../templates/about.hbs');

module.exports = Backbone.View.extend({
    "render": function () {
        'use strict';
        var context = {};
        this.$el.html(template(context));
    }
});
