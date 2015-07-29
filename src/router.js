var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone');

Backbone.Radio = require('backbone.radio');

module.exports = Backbone.Router.extend({
    "routes": {
        "": "home",
        "!home": "home",
        "!about": "about",
        "!song-list": "songList",
        "!media": "media",
        "!shows": "shows",
        "!booking": "booking"
    },
    "channel": Backbone.Radio.channel('state'),
    "home": function () {
        'use strict';
        this.channel.trigger('load', 'home');
    },
    "about": function () {
        'use strict';
        this.channel.trigger('load', 'about');
    },
    "songList": function () {
        'use strict';
        this.channel.trigger('load', 'songList');
    },
    "media": function () {
        'use strict';
        this.channel.trigger('load', 'media');
    },
    "shows": function () {
        'use strict';
        this.channel.trigger('load', 'shows');
    },
    "booking": function () {
        'use strict';
        this.channel.trigger('load', 'booking');
    }
});
