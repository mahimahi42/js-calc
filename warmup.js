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