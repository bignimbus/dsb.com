var CollectionView = require('./group-view'),
    LayoutView = require('./layout-view'),
    ReviewView = require('./review'),
    template = require('../templates/booking.hbs'),
    ReviewsCollection = require('../collections/reviews');

module.exports = LayoutView.extend({
    "template": template,
    "regions": {
        "reviews": ".reviews"
    },
    "initialize": function () {
        'use strict';
        this.reviewsView = new CollectionView({
            "collection": new ReviewsCollection(),
            "childView": ReviewView,
            "isGallery": true
        });
    },
    "onRender": function () {
        'use strict';
        this.showChildView('reviews', this.reviewsView);
    }
});
