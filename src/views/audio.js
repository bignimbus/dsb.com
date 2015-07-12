var Mn = require('backbone.marionette'),
    template = require('../templates/audio.hbs');

module.exports = Mn.ItemView.extend({
    "template": template,
    "className": "track"
});
