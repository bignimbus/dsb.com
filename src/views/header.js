var Backbone = require('backbone'),
    Mn = require('backbone.marionette'),
    template = require('../templates/header.hbs');

module.exports = Mn.ItemView.extend({
    "template": template
});