const fibonacci = function(a) {
	if(a < 0) {
		return "OOPS"
	}
	if(typeof a === 'string') {
		a = Number(a)
	}
	let x = 1
	let y = 2
	for (let i = 1; i < a - 1; i++) {
		let temp = y
		y = y + x
		x = temp
	}
	return x
};

// Do not edit below this line
module.exports = fibonacci;
