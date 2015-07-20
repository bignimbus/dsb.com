/* global blueimp */
var _ = require('underscore'),
    ChildView = require('./child-view'),
    Backbone = require('backbone'),
    template = require('../templates/about.hbs');

Backbone.Radio = require('backbone.radio');

module.exports = ChildView.extend({
    "template": template,
    "channel": Backbone.Radio.channel('state'),
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
            if (!this.galleryLoaded && (state === 'about' || this.$el.is(':visible'))) {
                console.log('init gallery');
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
    }
});
