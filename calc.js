var add = function(x, y) { return x + y; };

var multiply = function(x, y) { return x * y; };

var subtract = function(x, y) { return x - y; };

var divide = function(x, y) {
	if (y === 0) {
		return NaN;
	}
	return x / y;
};