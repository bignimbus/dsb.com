var Mn = require('backbone.marionette'),
    Backbone = require('backbone'),
    template = require('../templates/song.hbs');

module.exports = Mn.ItemView.extend({
    "template": template
});
