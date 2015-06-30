var fs = require('fs'),
    path = require('path'),
    jeet = require('jeet'),
    mkdirp = require('mkdirp'),
    stylus = require('stylus'),
    rupture = require('rupture'),
    dist = path.resolve(__dirname, '../dist'),
    stylesDir = path.resolve(__dirname, '../src/styles');

module.exports = function () {
    'use strict';
    console.log('building styles...');

    function writeCss (css) {
        mkdirp(dist + '', function (e) {
            if (e) {
                console.log(e);
            } else {
                fs.writeFile(dist + '/main.css', css, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('stylesheets built');
                    }
                });
            }
        });
    }

    function processStylesheets (data) {
        stylus(data)
            .set('paths', [stylesDir])
            .use(jeet())
            .use(rupture())
            .render(function(err, css){
                if (err) {
                    console.log(err);
                } else {
                    writeCss(css);
                }
            });
    }

    fs.readFile(stylesDir + '/main.styl', {
        "encoding": "utf8"
    }, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            processStylesheets(data);
        }
    });
};
