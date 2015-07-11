var Handlebars = require('hbsfy/runtime'),
    moment = require('moment');

module.exports = function () {
    'use strict';
    Handlebars.registerHelper("money", function (num) {
        return '$' + num.toFixed(2);
    });

    Handlebars.registerHelper("moment", function (date) {
        return moment.unix(date).format('LLL');
    });
};
