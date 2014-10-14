atget
=====

An easier way of getting object attributes

	var atget = require('./atget');
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
	console.log(atget(obj, key));
	// returns 1

	console.log(atget(obj, key));
	// returns 1

	console.log(atget(obj, missingKey));
	// returns undefined

	console.log(atget(obj, missingKey, defaultValue));
	// returns 'not found'

	// call getter on an instance
	console.log(new atget(obj).get(key));
	// returns 1

	// call getter on an automatically created instance
	console.log(atget(obj).get(key));
	// returns 1

	console.log(atget(obj).get(missingKey, defaultValue));
	// returns 'not found'