module.exports = function mae(original, noisy, step) {
    var error
    var offset;
    var sum = 0;
    var i = 0;
    var l = original.length;
    step = step || 1;

    for (i = 0; i < l; i += step) {
        error = Math.abs(original[i] - noisy[i]);
        sum += error;
    }
    return sum / original.length;
};
