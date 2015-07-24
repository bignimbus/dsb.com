var _ = require('underscore'),
    Backbone = require('backbone'),
    Mn = require('backbone.marionette');

module.exports = Mn.CollectionView.extend({
    "interval": 300,
    "currentIndex": -1,
    "hovered": false,
    "events": {
        "mouseover": "mouseOn",
        "mouseout": "mouseOff",
        "touchstart": "mouseOn",
        "touchend": "mouseOff"
    },
    "initialize": function (opts) {
        'use strict';
        if (opts.fetch !== false) {
            this.collection.fetch();
        }
        this.isGallery = !!opts.isGallery;
    },
    "hidePage": function (fn) {
        'use strict';
        this.$el.fadeOut(this.interval, fn);
    },
    "showPage": function (fn) {
        'use strict';
        this.$el.fadeIn(this.interval, fn);
    },
    "onRender": function () {
        'use strict';
        if (!this.isGallery) {
            return;
        }
        _.delay(_.bind(this.cycleGallery, this), 500);
    },
    "mouseOn": function () {
        'use strict';
        this.hovered = true;
    },
    "mouseOff": function () {
        'use strict';
        this.hovered = false;
    },
    "cycleGallery": function () {
        'use strict';
        if (!this.hovered) {
            this.currentIndex = (this.currentIndex + 1) % this.children.length;
            this.children.each(function (view, index) {
                if (view.$el.is(':visible')) {
                    view.hidePage();
                }
                if (index === this.currentIndex) {
                    view.showPage();
                }
            }, this);
        }
        _.delay(_.bind(this.cycleGallery, this), 5000);
    }
});
