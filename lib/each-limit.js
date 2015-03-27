/**
 * Each Helper (w/limit).
 *
 * {{#each-limit items 3}}
 * {{/each-limit}}
 *
 * @param {array} context
 * @param {number} limit
 */
module.exports = function eachLimit (context, limit) {
    var options = arguments[arguments.length - 1];

    if (context && context.length > 0) {
        return context
            .slice(0, Math.min(context.length, limit))
            .reduce(function (memo, contextItem) {
                return memo + options.fn(contextItem);
            }, '');
    }
    return options.inverse(this);
};
