var Backbone = require('backbone'),
    Mn = require('backbone.marionette'),
    template = require('../templates/navigation.hbs');

module.exports = Mn.ItemView.extend({
    "template": template
});
