var _ = require('underscore'),
    ChildView = require('./child-view'),
    template = require('../templates/about.hbs');

module.exports = ChildView.extend({
    "template": template,
    "onRender": function () {
        'use strict';
        _.delay(function () {
            blueimp.Gallery(
                document.getElementById('links').getElementsByTagName('a'),
                {
                    "container": "#blueimp-gallery-carousel",
                    "carousel": true
                }
            );
        }, 1000);
    }
});
