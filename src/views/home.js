/* global blueimp */
var _ = require('underscore'),
    LayoutView = require('./layout-view'),
    CollectionView = require('./group-view'),
    EventView = require('./event'),
    Backbone = require('backbone'),
    template = require('../templates/home.hbs');

Backbone.Radio = require('backbone.radio');

module.exports = LayoutView.extend({
    "template": template,
    "channel": Backbone.Radio.channel('state'),
    "regions": {
        "calendar": ".mini-calendar"
    },
    "collectionEvents": {
        "sync": "renderCalendar"
    },
    "initialize": function () {
        'use strict';
        this.listenTo(this.channel, 'load', this.initGallery);
    },
    "onRender": function () {
        'use strict';
        this.initGallery();
    },
    "initGallery": function (state) {
        'use strict';
        _.delay(_.bind(function () {
            if (!this.galleryLoaded && (state === 'home' || this.$el.is(':visible'))) {
                blueimp.Gallery(
                    document.getElementById('links').getElementsByTagName('a'),
                    {
                        "container": "#blueimp-gallery-carousel",
                        "carousel": true
                    }
                );
                this.galleryLoaded = true;
            }
        }, this), 500);
    },
    "renderCalendar": function () {
        'use strict';
        var collection = this.collection.filter(function (model) {
                return !/private/i.test(model.get('summary'));
            });
        collection = collection.slice(0, 3);
        this.miniCalendar = new CollectionView({
            "collection": new Backbone.Collection(collection.map(function (model) {
                model.set({"mini": true});
                return model;
            })),
            "childView": EventView.extend({"className": "event mini"}),
            "fetch": false
        });
        this.showChildView('calendar', this.miniCalendar);
    }
});
