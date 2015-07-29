var _ = require('underscore'),
    Backbone = require('backbone'),
    Mn = require('backbone.marionette'),
    SongCollection = require('../collections/song-list'),
    ShowCollection = require('../collections/shows'),
    BookingView = require('./booking'),
    CollectionView = require('./group-view'),
    LayoutView = require('./layout-view'),
    aboutTemplate = require('../templates/about.hbs'),
    AudioCollection = require('../collections/audio'),
    HomeView = require('./home'),
    ShowsView = require('./shows'),
    MediaView = require('./media'),
    SongView = require('./song'),
    template = require('../templates/content.hbs');

Backbone.Radio = require('backbone.radio');

module.exports = Mn.LayoutView.extend({
    "template": template,
    "channel": Backbone.Radio.channel('state'),
    "pages": {},
    "regions": {
        "home": "#home",
        "media": "#media",
        "booking": "#booking",
        "shows": "#shows",
        "about": "#about",
        "songList": "#song-list"
    },
    "initialize": function (opts) {
        'use strict';
        this.state = opts.state;
        this.showCollection = new ShowCollection();
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
            "home": new HomeView({
                "collection": this.showCollection
            }),
            "media": new MediaView({
                "collection": new AudioCollection()
            }),
            "booking": new BookingView(),
            "shows": new ShowsView({
                "collection": this.showCollection
            }),
            "about": new LayoutView({
                "template": aboutTemplate
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
