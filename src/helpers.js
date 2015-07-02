var Handlebars = require('hbsfy/runtime');

module.exports = function () {
    'use strict';
    Handlebars.registerHelper("money", function (num) {
        return '$' + num.toFixed(2);
    });
};
