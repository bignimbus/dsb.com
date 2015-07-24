/* global SC */
var _ = require('underscore'),
    Backbone = require('backbone');

module.exports = Backbone.Collection.extend({
    "fetch": function () {
        'use strict';
        SC.get('/playlists/121174072', _.bind(function (response) {
            var tracks = _(response.tracks).map(this.indexTracks, this);
            this.set(tracks);
            this.trigger('sync');
        }, this));
    },
    "indexTracks": function (track, index) {
        'use strict';
        return _.extend(track, {
            "trackIndex": (index + 1) % 2
        });
    }
});
