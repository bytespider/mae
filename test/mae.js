var mae = require('../');
var test = require('tap').test;

var original = [285, 330, 0, 64, 84, 236, 11, 53];
var noisy    = [301, 353, 4, 21, 57, 127, 11, 30];

test('zero', function (t) {
    t.plan(1);

    var result = mae(original, original);
    t.equal(result, 0);
});

test('forcast1', function (t) {
    t.plan(1);

    var result = mae(original, noisy);
    t.equal(result, 30.625);
});
