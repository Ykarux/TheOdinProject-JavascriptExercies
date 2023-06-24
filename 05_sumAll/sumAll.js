const sumAll = function(numberDown, numberUp) {
	if(typeof numberDown !== 'number' || typeof numberUp !== 'number' || numberDown < 0 || numberUp < 0) {
		return 'ERROR'
	}
	if(numberUp < numberDown) {
		let temp = numberUp
		numberUp = numberDown
		numberDown = temp
	}
	let result = 0
	for (let i = numberDown; i <= numberUp; i++) {
		result += i
	}
	return result
};

// Do not edit below this line
module.exports = sumAll;
