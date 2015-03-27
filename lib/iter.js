var _ = require('lodash');

function reduceContext(memo, contextItem, index) {
    return memo + this.fn(
        _.extend(
            {},
            contextItem,
            {
              i: index,
              iPlus1: index + 1
            }
        )
    );
}

/**
* Adds the current index and next index to iteration scope.
*
* {{#iter items}}
* {{/iter}}
*
* @param {array} context
*/
module.exports = function iter (context, options) {

    if (context && context.length > 0) {
        return _.reduce(context, reduceContext, '', options);
    }
    return options.inverse(this);
};
