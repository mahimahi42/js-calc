var my_max = function(arr) {
	max = -1000000
	length = arr.length;
    
    for (var i = 0; i < length; i++) {
        if (max < arr[i]) {
            max = arr[i];   
        }
    }
    
	return max;
};

var vowel_count = function(str) {
	vowels = 0;
	var is_vowel = function(c) {
		if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
			return true;
		}
		return false;
	};
	length = str.length;

	for (var i = 0; i < length; i++) {
		if (is_vowel(str[i])) {
			vowels++;
		}
	}
	return vowels;
};

var reverse = function(str) {
	ret = "";
	length = str.length;

	for (var i = length - 1; i >= 0; i--) {
		ret += str[i];
	}

	return ret;
};