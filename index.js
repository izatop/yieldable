/**
 * Make a javascript function yieldable.
 *
 * @param {Function} callable
 * @param {Object|Array} [owner]
 * @param {Array} [params]
 * @returns {Function}
 */
function yieldable(callable, owner, params) {
    // if an owner is array with passed arguments
    if (typeof params == "undefined") {
        params = [];
    }

    if (!params instanceof Array) {
        throw new Error('Yieldable: params must be an array');
    }

    if(typeof owner == "object"
        && owner instanceof Array) {
        params = owner;
        owner = null;
    }

    return function (fn) {
        params.push(fn); // push fn to end
        owner[callable].apply(owner, params);
    }
}

module.exports = yieldable;