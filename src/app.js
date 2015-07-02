var Backbone = require('backbone'),
    Mn = require('backbone.marionette'),
    Router = require('./router'),
    LayoutView = require('./views/layout');

module.exports = Mn.Application.extend({
    "initialize": function () {
        'use strict';
        this.router = new Router({
            "layoutView": new LayoutView({
                "el": "#container"
            })
        });
    },
    "onStart": function () {
        'use strict';
        require('./helpers')();
        Backbone.history.start();
    }
});
