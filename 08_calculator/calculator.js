const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce((total, value) => total + value, 0)
};

const multiply = function(...args) {
    return args.reduce((total, value) => total * value, 1)
};

const power = function(a,b) {
	let result = 1;

	for (let i = 0; i < b; i++) {
		result *= a;
	}

	return result;
};

const factorial = function(a) {
	if(a === 0) {
		return 1
	}
    if(a > 1) {
      return a * factorial(a-1)
    }
	return a
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
