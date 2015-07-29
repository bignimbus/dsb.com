var Handlebars = require('hbsfy/runtime'),
    moment = require('moment');

module.exports = function () {
    'use strict';
    Handlebars.registerHelper("money", function (num) {
        return '$' + num.toFixed(2);
    });

    Handlebars.registerHelper("moment", function (date, format) {
        if (!format || typeof format !== 'string') {
            format = 'LLL';
        }
        return moment.unix(date).format(format);
    });

    Handlebars.registerHelper("getLinks", function (str) {
        if (!str) {
            return '';
        }
        var text = str.replace(/(?:(https?\:\/\/|www\.)?)(.+)\s?/gi, '<a href="$1$2$3" target="_blank">$3</a>');
        return new Handlebars.SafeString(text);
    });

    Handlebars.registerHelper("address", function (str) {
        return encodeURIComponent(str);
    });
};
