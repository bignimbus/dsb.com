var Mn = require('backbone.marionette'),
    LayoutView = require('./layout-view'),
    CollectionView = require('./group-view'),
    template = require('../templates/shows.hbs'),
    EventView = require('./event');

module.exports = LayoutView.extend({
    "template": template,
    "regions": {
        "shows": ".events"
    },
    "events": {
        "click #past-shows": "getPast",
        "click #future-shows": "getFuture"
    },
    "collectionEvents": {
        "first": "hidePrevious",
        "last": "hideNext"
    },
    "initialize": function () {
        'use strict';
        this.eventView = new CollectionView({
            "collection": this.collection,
            "childView": EventView
        });
    },
    "onRender": function () {
        'use strict';
        this.showChildView('shows', this.eventView);
    },
    "hidePrevious": function () {
        'use strict';
        this.hideElement('#past-shows');
    },
    "hideNext": function () {
        'use strict';
        this.hideElement('#future-shows');
    },
    "getPast": function () {
        'use strict';
        this.collection.getIncrement(true);
    },
    "getFuture": function () {
        'use strict';
        this.collection.getIncrement();
    }
});
