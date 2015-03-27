/**
 * Builds a <select> form control.
 * {{{input-select "month" options "05"}}}
 *
 * @param {string} name    - Input name.
 * @param {array}  options - An array containing all options.
 * @param {string} value   - The selected value.
 */
module.exports = function inputSelect () {
    var name     = arguments[0];
    var options  = arguments[1];
    var value    = arguments.length > 3 ? arguments[2] : null;

    return options.reduce(
        function (memo, option) {
            return [
                memo,
                '<option value="',
                option.value,
                '"',
                (
                    (option.selected === true || option.value === value) ?
                    ' selected="selected"' :
                    ''
                ),
                '>',
                option.label,
                '</option>'
            ].join('');
        },
        '<select name="' + name + '">'
    ) + '</select>';
};
