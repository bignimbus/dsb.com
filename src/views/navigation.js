var Backbone = require('backbone'),
    Mn = require('backbone.marionette'),
    template = require('../templates/navigation.hbs');

Backbone.Radio = require('backbone.radio');

module.exports = Mn.ItemView.extend({
    "template": template,
    "channel": Backbone.Radio.channel('interactions'),
    "events": {
        "click a": "toggleCurrent",
        "click .menu-icon": "showMenu"
    },
    "toggleCurrent": function (e) {
        'use strict';
        this.channel.trigger('menu', {
            "method": "removeClass"
        });
        this.$el.removeClass('show');
        this.$('a').removeClass('current');
        this.$(e.currentTarget).addClass('current');
    },
    "showMenu": function () {
        'use strict';
        this.channel.trigger('menu', {
            "method": "toggleClass"
        });
    }
});
