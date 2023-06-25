const palindromes = function (string) {
	string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
	string = string.toLowerCase()
	string = string.replace(/\s/g, '');
	for (let i = 0; i < string.length; i++) {
		if(string.charAt(string.length - i - 1) !== string.charAt(i)) {
			return false
		}
	}
	return true
};

// Do not edit below this line
module.exports = palindromes;
