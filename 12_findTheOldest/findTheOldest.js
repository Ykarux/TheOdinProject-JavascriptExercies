const findTheOldest = function(arr) {
	return arr.reduce((oldest, element) => {
		if(element.yearOfDeath === undefined) {
			if ((2023 - element.yearOfBirth) > (oldest.yearOfDeath - oldest.yearOfBirth)) {
				return element
			} else {
				return oldest
			}
		}
		if ((element.yearOfDeath - element.yearOfBirth) > (oldest.yearOfDeath - oldest.yearOfBirth)) {
			return element
		} else {
			return oldest
		}
	}, arr[1])
};

// Do not edit below this line
module.exports = findTheOldest;
