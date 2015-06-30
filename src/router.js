var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    AppView = require('./views/about');

module.exports = Backbone.Router.extend({
    "routes": {
        "": "about",
        "about": "about",
        "song-list": "songList",
        "listen": "listen",
        "watch": "watch",
        "shows": "shows",
        "reviews": "reviews"
    },
    "about": function () {
        'use strict';
    }
});
