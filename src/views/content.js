var Backbone = require('backbone'),
    Mn = require('backbone.marionette'),
    AboutView = require('./about'),
    template = require('../templates/content.hbs');

Backbone.Radio = require('backbone.radio');

module.exports = Mn.LayoutView.extend({
    "template": template,
    "channel": Backbone.Radio.channel('state'),
    "regions": {
        "main": "#content"
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
        if (this.state && this.state !== state) {
            this.pages[this.state].destroy();
        }
        this.state = state;
        this.showChildView('main', this.pages[state]);
    },
    "destroyView": function () {
        'use strict';
        this.pages[this.state].destroy();
    },
    "initChildViews": function () {
        'use strict';
        this.pages = {
            "about": new AboutView()
        };
    }
});
