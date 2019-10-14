/**
 * Return an array of the unique elements of the inputs.
 * @param numbers
 */
function findUniqueNumbers(numbers) {
	var uniqueNumbers = [];
	for(var i = 0; i < numbers.length; i++){
		if(!uniqueNumbers.includes(numbers[i])){
			uniqueNumbers[uniqueNumbers.length] = numbers[i];
		}
	}
	return uniqueNumbers;
}

/**
 * Returns the input array, sorted: smallest to latest.
 * @param numbers
 */
function sortArray(numbers) {
	numbers = findUniqueNumbers(numbers);
	
	var doLoop = true;
	
	//Bubble Sort
	while(doLoop){
		doLoop = false;
		for(var i = 0; i < numbers.length; i++){
			if(numbers[i+1] < numbers[i]){
				var temp = numbers[i];
				numbers[i] = numbers[i+1];
				numbers[i+1] = temp;
				doLoop = true;
			}
		}
	}
	
	return numbers;
}

/**
 * Returns true or false, based on `term` being a palindrome.
 * @param term
 */
function isPalindrome(term) {
}


// Export the functions under test:
module.exports = {
    findUniqueNumbers,
    isPalindrome,
    sortArray
};
