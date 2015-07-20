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
    "initialize": function () {
        'use strict';
        this.listenView = new CollectionView({
            "collection": this.collection,
            "childView": AudioView
        });
    },
    "onRender": function () {
        'use strict';
        this.showChildView('listen', this.listenView);
    }
});
