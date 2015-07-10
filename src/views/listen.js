var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    Mn = require('backbone.marionette'),
    ChildView = require('./child-view');

module.exports = ChildView.extend({
    "serializeData": function () {
        'use strict';
        return {
            "flash": window.hasFlash,
            "controlsColor": "7e007e",
            "bgColor": "fe0002"
        };
    }
});
