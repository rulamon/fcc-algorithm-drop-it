function dropElements(arr, func) {
	//use a for loop to find the first value in arr for which func(value) === true and return the remainder
	//of the array or an empty array if no values pass the test
	for (let i = 0; i < arr.length; i++) {
		if (func(arr[i])) {
			return arr.slice(i);
		}
	}
	return [];
}
console.log(dropElements([1, 2, 3], function(n) {return n > 1; }));