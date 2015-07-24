var Mn = require('backbone.marionette'),
    template = require('../templates/media.hbs'),
    AudioView = require('./audio'),
    LayoutView = require('./layout-view'),
    CollectionView = require('./group-view');

module.exports = LayoutView.extend({
    "template": template,
    "regions": {
        "listen": ".listen"
    },
    "collectionEvents": {
        "sync": "bindHeaderPlay"
    },
    "initialize": function () {
        'use strict';
        this.listenView = new CollectionView({
            "collection": this.collection,
            "childView": AudioView
        });
        this.quickPlayView = new AudioView({
            "el": ".main-header .icons"
        });
    },
    "onRender": function () {
        'use strict';
        this.showChildView('listen', this.listenView);
    },
    "bindHeaderPlay": function () {
        'use strict';
        console.log('o hai');
        this.quickPlayView.model = this.collection.sample();
    }
});
