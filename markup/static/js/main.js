'use strict';

/*
    App entry point
 */

//jquery
window.$ = require('./libraries/jquery-2.2.4.min');

$(document).ready(function() {

    if(!touch()) {
        $('body').addClass('no-touch');
    }
    require('./plugins/dropdown');

});


/**
 * Find touch devices
 * @returns {boolean}
 */
function touch () {
    return  'ontouchstart' in window;
}
