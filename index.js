function atget(obj, keyString, def) {
	if (typeof(keyString) !== 'string' || typeof(obj) !== 'object' || obj === null || keyString.length === 0) {
		return def;
	}
	var keys = keyString.split('.');
	var tObj = obj;
	for (var i = 0; i < keys.length; i++) {
		tObj = tObj[keys[i]];
		if (typeof(tObj) === 'undefined') {
			return def;
		}
	}
	return tObj;
}

var AtGet = function AtGet(obj) {
	if (this instanceof AtGet) {
		this.obj = obj;
		return this;
	} else if (arguments.length > 1) {
		return atget.apply(obj, arguments);
	} else {
		return new AtGet(obj);
	}
};

AtGet.prototype.get = function(keyString, def) {
	return atget(this.obj, keyString, def);
};

module.exports = AtGet;