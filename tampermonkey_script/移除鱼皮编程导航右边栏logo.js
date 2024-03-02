// ==UserScript==
// @name         Remove Group Preview Wrapper
// @namespace    http://example.com/
// @version      1
// @description  Automatically remove elements with class group-preview-wrapper on page load
// @match        *https://wx.zsxq.com/dweb2/index/group/51122858222824*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.onload = function () {
        var previews = document.getElementsByClassName('group-preview-wrapper');
        while (previews.length > 0) {
            previews[0].parentNode.removeChild(previews[0]);
        }
    };
})();