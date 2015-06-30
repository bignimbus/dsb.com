var $ = require('jquery'),
    Backbone = require('backbone'),
    Router = require('./router');

require('./helpers')();

$(document).ready(function () {
    'use strict';
    new Router();
    Backbone.history.start();
});
