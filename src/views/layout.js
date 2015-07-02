var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('Backbone'),
    Mn = require('backbone.marionette'),
    template = require('../templates/layout.hbs'),
    HeaderView = require('./header'),
    NavigationView = require('./navigation'),
    ContentView = require('./content');

Backbone.Radio = require('backbone.radio');

module.exports = Mn.LayoutView.extend({
    "template": template,
    "channel": Backbone.Radio.channel('state'),
    "regions": {
        "header": ".main-header",
        "navigation": ".main-nav",
        "content": ".main-content"
    },
    "initialize": function () {
        'use strict';
        this.listenToOnce(this.channel, 'load', this.initState);
    },
    "initState": function (state) {
        'use strict';
        this.state = state;
        this.render();
    },
    "onRender": function () {
        'use strict';
        this.showChildView('header', new HeaderView());
        this.showChildView('navigation', new NavigationView());
        this.showChildView('content', new ContentView({
            "state": this.state
        }));
    }
});
