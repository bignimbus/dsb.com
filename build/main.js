var buildJavaScript = require('./build-js'),
    buildStylesheets = require('./build-styles');

(function () {
    'use strict';
    console.log('building...');

    buildJavaScript();
    buildStylesheets();

})();
