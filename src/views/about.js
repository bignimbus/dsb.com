var $ = require('jquery'),
    ChildView = require('./child-view'),
    template = require('../templates/about.hbs');

module.exports = ChildView.extend({
    "template": template
});
