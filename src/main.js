var $ = require('jquery'),
    App = require('./app'),
    app = new App();

$(document).ready(function () {
    'use strict';
    app.start();
});
