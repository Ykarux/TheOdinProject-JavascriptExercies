const removeFromArray = function(array, ...elementToRemove) {
	return array.filter((element) => {
		return !elementToRemove.includes(element)
	})
};

// Do not edit below this line
module.exports = removeFromArray;
