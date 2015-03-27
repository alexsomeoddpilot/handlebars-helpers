/**
 * Each Helper (in reverse).
 *
 * {{#each-reverse items 3}}
 * {{/each-reverse}}
 *
 * @param {array} context
 */
module.exports = function eachReverse (context) {
    var options = arguments[arguments.length - 1];

    if (context && context.length > 0) {
        return context
            .reverse()
            .reduce(function (memo, contextItem) {
                return memo + options.fn(contextItem);
            }, '');
    }
    return options.inverse(this);
};
