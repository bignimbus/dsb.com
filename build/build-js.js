var fs = require('fs'),
    path = require('path'),
    mkdirp = require('mkdirp'),
    browserify = require('browserify');

module.exports = function () {
    'use strict';
    console.log('building javascript...');

    function buildSource () {
        var file = fs.createWriteStream(path.resolve(__dirname, '../dist/app.js')),
            js = browserify(path.resolve(__dirname, '../src/main.js'), {
                "standalone": "start",
                "transform": ["hbsfy"]
            });

        js.bundle().pipe(file);
        console.log('js built');
    }

    mkdirp(path.resolve(__dirname, '../dist/'), function (e) {
        if (e) {
            console.log(e);
        } else {
            buildSource();
        }
    });
};
