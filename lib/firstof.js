var _ = require('lodash');

// Will return the first turthy value.
// Handy for setting default values.
module.exports = function firstof () {
    return _(arguments)
        // Use everything, but the options object
        .dropRight()
        .reduce(function (memo, value) {
            return (value && !memo) ? value : memo;
        }, '');
};
