var Mn = require('backbone.marionette'),
    LayoutView = require('./layout-view'),
    CollectionView = require('./group-view'),
    EventView = require('./event');

module.exports = LayoutView.extend({
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
        console.log('hideprev');
        this.hideElement('#past-shows');
    },
    "hideNext": function () {
        'use strict';
        console.log('hidenext');
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
