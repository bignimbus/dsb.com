var _ = require('underscore'),
    Backbone = require('backbone'),
    Mn = require('backbone.marionette'),
    SongCollection = require('../collections/song-list'),
    ShowCollection = require('../collections/shows'),
    ChildView = require('./child-view'),
    CollectionView = require('./group-view'),
    AudioCollection = require('../collections/audio'),
    AboutView = require('./about'),
    ShowsView = require('./shows'),
    SongView = require('./song'),
    MediaView = require('./media'),
    template = require('../templates/content.hbs'),
    pageTemplates = {
        "booking": require('../templates/booking.hbs'),
        "shows": require('../templates/shows.hbs')
    };

Backbone.Radio = require('backbone.radio');

module.exports = Mn.LayoutView.extend({
    "template": template,
    "channel": Backbone.Radio.channel('state'),
    "pages": {},
    "regions": {
        "about": "#about",
        "media": "#media",
        "booking": "#booking",
        "shows": "#shows",
        "songList": "#song-list"
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
            "about": new AboutView(),
            "media": new MediaView({
                "collection": new AudioCollection()
            }),
            "booking": new ChildView({
                "template": pageTemplates.booking
            }),
            "shows": new ShowsView({
                "template": pageTemplates.shows,
                "collection": new ShowCollection()
            }),
            "songList": new CollectionView({
                "collection": new SongCollection(),
                "childView": SongView
            })
        };
        _(this.pages).each(function (page, name) {
            this.showChildView(name, page);
        }, this);
    }
});
