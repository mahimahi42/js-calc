var add = function(x, y) { return x + y; };

var multiply = function(x, y) { return x * y; };

var subtract = function(x, y) { return x - y; };

var divide = function(x, y) {
	if (y === 0) {
		return NaN;
	}
	return x / y;
};

$(document).ready(function() {
	var operands = [];
	var operator;
	$("div[id=num]").each(function() {
		var tmp = $(this).text();
		$(this).click(function() {
			console.log(tmp);
			operands.push(parseInt(tmp));
			console.log(operands.toString());
		});
	});

	$("div[id=operator]").each(function() {
		var tmp = $(this).text();
		$(this).click(function() {
			console.log(tmp);
			operator = tmp;
			console.log(operator);
		});
	});

	$("div#equals").click(function() {
		switch (operator) {
			case "+":
				var res = add(operands[0], operands[1]);
				console.log(res);
				operands = [];
				operator = "";
				break;
			case "-":
				var res = subtract(operands[0], operands[1]);
				console.log(res);
				operands = [];
				operator = "";
				break;
			case "*":
				var res = multiply(operands[0], operands[1]);
				console.log(res);
				operands = [];
				operator = "";
				break;
			case "/":
				var res = divide(operands[0], operands[1]);
				console.log(res);
				operands = [];
				operator = "";
				break;
		}
	});

	$("div#clear").click(function() {
		operands = [];
		operator = "";
		console.log(operands.toString());
		console.log(operator);
	});
});