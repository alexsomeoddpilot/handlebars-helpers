module.exports = function abbrCount (val) {
    var count = parseInt(val, 10);

    if (count >= 1000) {
        return Math.floor(count / 1000) + 'k+';
    }

    return String(count);
};
