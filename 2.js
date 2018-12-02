function dropElements(arr, func) {
	//create an array of the values in arr for which func(val) is true
	let trueArr = arr.filter(val => func(val));
	//assign the index of the first true value in the original array to a variable
	let trueArrIndex = arr.indexOf(trueArr[0]);
	//use ternary operator to return the part of the array following the first true value or to return an empty array
	return trueArr.length > 0 ? arr.slice(trueArrIndex) : [];
}
console.log(dropElements([1, 2, 3], function(n) {return n > 1; }));