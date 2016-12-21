(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define(['lodash', 'pakkajs'], factory);
    } else if (typeof module === "object" && module.exports) {
        var lodash = require('lodash'),
            pakka = require('pakkajs');
        module.exports = factory(lodash, pakka);
    } else {
        root.pakkaDropdown = factory(root._, root.pakka);
    }
}(this, function(lodash, pakka) {
    var component = pakka({
        html: '<div>' +
            '<button bind-text="selectedItem.text"></button>' +
            '<div class="flyout"></div>' +
            '</div>',
        name: 'pakkajs-dropdown'
    });
    return component;
}));
