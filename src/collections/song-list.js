var _ = require('underscore'),
    Backbone = require('backbone');

module.exports = Backbone.Collection.extend({
    "url": "http://jdauriemma.startlogic.com/dsb/get-songs.php",
    "parse": function (response) {
        'use strict';
        var genres = _.chain(response).pluck('genre').union().value();
        return genres.map(function (genre, index) {
            return {
                "index": index % 4,
                "name": genre,
                "songs": _(response).where({"genre": genre})
            };
        });
    }
});
