/* global SC */
var _ = require('underscore'),
    Mn = require('backbone.marionette'),
    template = require('../templates/audio.hbs');

module.exports = Mn.ItemView.extend({
    "template": template,
    "className": "track",
    "events": {
        "click .cover": "togglePlay",
        "click .top-play": "togglePlay"
    },
    "togglePlay": function (firstPlay) {
        'use strict';
        var id,
            url;
        if (!this.sound) {
            this.state('loading');
            url = this.model.get('stream_url');
            id = url.match(/\/tracks\/\w.+?\//)[0];

            SC.stream(id, {
                "useHTML5Audio": true,
                "preferFlash": false
            }, _.bind(function (sound) {
                this.sound = sound;
                this.playOrPause();
                this.sound.onfinish = _(this.state).bind(this, 'paused');
            }, this));
        } else {
            this.playOrPause();
        }
    },
    "playOrPause": function () {
        'use strict';
        var state = this.sound.getState();
        if (state === 'playing') {
            this.sound.pause();
            this.state('paused');
        } else {
            this.sound.play();
            this.state('playing');
        }
    },
    "state": function (state) {
        'use strict';
        var $el = this.$('.play');
        $el.removeClass('fa-play fa-spinner fa-spin fa-pause');
        switch (state) {
            case 'loading':
                $el.addClass('fa-spinner fa-spin');
                break;
            case 'paused':
                $el.addClass('fa-play');
                break;
            case 'playing':
                $el.addClass('fa-pause');
        }
    }
});
