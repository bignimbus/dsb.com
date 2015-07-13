var Mn = require('backbone.marionette'),
    LayoutView = require('./layout-view'),
    CollectionView = require('./group-view'),
    EventView = require('./event'),
    ShowCollection = require('../collections/shows');

module.exports = LayoutView.extend({
    "regions": {
        "shows": ".events"
    },
    "events": {
        "click #past-shows": "getPast",
        "click #future-shows": "getFuture"
    },
    "initialize": function () {
        'use strict';
        this.collection = new ShowCollection();
        this.eventView = new CollectionView({
            "collection": this.collection,
            "childView": EventView
        });
    },
    "onRender": function () {
        'use strict';
        this.showChildView('shows', this.eventView);
    },
    "getPast": function () {
        'use strict';
        console.log('getpast');
        this.collection.getIncrement(true);
    },
    "getFuture": function () {
        'use strict';
        console.log('getfuture');
        this.collection.getIncrement();
    }
});
