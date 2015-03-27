var _ = require('lodash');

/**
 * Object Iteration Helper (w/key extraction).
 *
 * {{#each-key object}}
 * Key: {{this.key}} Value: {{this.value}}
 * {{/each-key}}
 *
 * @param {object} object
 */
module.exports = function eachKey (object) {
    var options = arguments[arguments.length - 1];
    return _.reduce(object, function (memo, value, key) {
        return memo + options.fn({
            key: key,
            value: value
        });
    }, '');
};
