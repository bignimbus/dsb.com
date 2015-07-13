var _ = require('underscore'),
    Backbone = require('backbone'),
    Mn = require('backbone.marionette'),
    SongCollection = require('../collections/song-list'),
    ShowCollection = require('../collections/shows'),
    AudioCollection = require('../collections/audio'),
    ChildView = require('./child-view'),
    CollectionView = require('./group-view'),
    ShowsView = require('./shows'),
    SongView = require('./song'),
    AudioView = require('./audio'),
    template = require('../templates/content.hbs'),
    pageTemplates = {
        "about": require('../templates/about.hbs'),
        "listen": require('../templates/listen.hbs'),
        "reviews": require('../templates/reviews.hbs'),
        "shows": require('../templates/shows.hbs'),
        "songList": require('../templates/song-list.hbs'),
        "watch": require('../templates/watch.hbs')
    };

Backbone.Radio = require('backbone.radio');

module.exports = Mn.LayoutView.extend({
    "template": template,
    "channel": Backbone.Radio.channel('state'),
    "pages": {},
    "regions": {
        "about": "#about",
        "listen": "#listen",
        "reviews": "#reviews",
        "shows": "#shows",
        "songList": "#song-list",
        "watch": "#watch"
    },
    "initialize": function (opts) {
        'use strict';
        this.state = opts.state;
    },
    "onRender": function () {
        'use strict';
        this.initChildViews();
        this.toggleViews(this.state);
        this.listenTo(this.channel, 'load', this.toggleViews);
    },
    "toggleViews": function (state) {
        'use strict';
        if (this.state !== state) {
            this.pages[this.state].hidePage(_.bind(function () {
                this.pages[state].showPage();
                this.state = state;
            }, this));
        } else {
            this.pages[state].showPage();
            this.state = state;
        }
    },
    "initChildViews": function () {
        'use strict';
        this.pages = {
            "about": new ChildView({
                "template": pageTemplates.about
            }),
            "listen": new CollectionView({
                "collection": new AudioCollection(),
                "childView": AudioView
            }),
            "reviews": new ChildView({
                "template": pageTemplates.reviews
            }),
            "shows": new ShowsView({
                "template": pageTemplates.shows
            }),
            "songList": new CollectionView({
                "collection": new SongCollection(),
                "childView": SongView
            }),
            "watch": new ChildView({
                "template": pageTemplates.watch
            })
        };
        _(this.pages).each(function (page, name) {
            this.showChildView(name, page);
        }, this);
    }
});
