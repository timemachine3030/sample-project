/**
 * Return an array of the unique elements of the inputs.
 * @param numbers
 */
function findUniqueNumbers(numbers) {
	var uniqueNumbers = [];
	var i;
	for(i = 0; i < numbers.length; i++){
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
