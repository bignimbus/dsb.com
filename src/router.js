var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    AppView = require('./views/about');

Backbone.Radio = require('backbone.radio');

module.exports = Backbone.Router.extend({
    "routes": {
        "": "about",
        "about": "about",
        "song-list": "songList",
        "listen": "listen",
        "watch": "watch",
        "shows": "shows",
        "reviews": "reviews"
    },
    "channel": Backbone.Radio.channel('state'),
    "initialize": function (opts) {
        'use strict';
        this.layoutView = opts.layoutView;
    },
    "about": function () {
        'use strict';
        this.channel.trigger('load', 'about');
    },
    "songList": function () {
        'use strict';
        this.channel.trigger('load', 'songList');
    },
    "listen": function () {
        'use strict';
        this.channel.trigger('load', 'listen');
    },
    "watch": function () {
        'use strict';
        this.channel.trigger('load', 'watch');
    },
    "shows": function () {
        'use strict';
        this.channel.trigger('load', 'shows');
    },
    "reviews": function () {
        'use strict';
        this.channel.trigger('load', 'reviews');
    }
});
