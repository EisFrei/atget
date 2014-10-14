var assert = require('assert');
var atget = require('../index');
var obj = {
	a: {
		b: {
			c: 1
		}
	}
}
var key = 'a.b.c';
var missingKey = 'nope.nothing.here';
var defaultValue = 'not found';

// call as function
assert.equal(atget(obj, key), 1);
// returns 1

assert.equal(atget(obj, key), 1);
// returns 1

assert.equal(atget(obj, missingKey), undefined);
// returns undefined

assert.equal(atget(obj, missingKey, defaultValue), defaultValue);
// returns 'not found'

// call getter on an instance
assert.equal(new atget(obj).get(key), 1);
// returns 1

// call getter on an automatically created instance
assert.equal(atget(obj).get(key), 1);
// returns 1

assert.equal(atget(obj).get(missingKey, defaultValue), defaultValue);
// returns 'not found'