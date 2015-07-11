/* global SC */
var $ = require('jquery'),
    App = require('./app'),
    app = new App();

function initSoundcloud () {
    'use strict';
    SC.initialize({
        "client_id": "bdecc97b28abac394cea6a77dfeee323",
        "redirect_uri": "http://diablosandwich.com/"
    });
}

function isFlashEnabled () {
    'use strict';
    window.hasFlash = false;
    try {
        var flash = new window.ActiveXObject('ShockwaveFlash.ShockwaveFlash');
        if (flash) {
            window.hasFlash = true;
        }
    } catch(e) {
        if (window.navigator.mimeTypes ["application/x-shockwave-flash"] !== void 0) {
            window.hasFlash = true;
        }
    }
}

$(document).ready(function () {
    'use strict';
    initSoundcloud();
    isFlashEnabled();
    app.start();
});
