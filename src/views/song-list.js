var LayoutView = require('./layout-view'),
    CollectionView = require('./group-view'),
    template = require('../templates/about.hbs'),
    SongView = require('./song');

module.exports = LayoutView.extend({
    "template": template,
    "regions": {
        "songList": ".songs"
    },
    "initialize": function () {
        'use strict';
        this.songList = new CollectionView({
            "collection": this.collection,
            "childView": SongView
        });
    },
    "onRender": function () {
        'use strict';
        this.showChildView('songList', this.songList);
    }
});
