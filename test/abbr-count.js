var test = require('tap').test;

var abbrCount = require('../lib/abbr-count');

test('less than 1000', function (t) {
    t.plan(1);

    t.equals(abbrCount(999), '999', 'value should remain uncahnged');
});

test('greater than 1000', function (t) {
    t.plan(1);

    t.equals(abbrCount(2000), '2k+', 'should abbreviate and append symbol');
});

test('greater than 9000', function (t) {
    t.plan(1);

    t.equals(abbrCount(12345), '12k+', 'should abbreviate and append symbol');
});
