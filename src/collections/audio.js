/* global SC */
var _ = require('underscore'),
    Backbone = require('backbone');

module.exports = Backbone.Collection.extend({
    "fetch": function () {
        'use strict';
        SC.get('/playlists/121174072', _.bind(function (response) {
            this.set(response.tracks);
        }, this));
    }
});
