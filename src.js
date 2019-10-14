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
	//Replace all spaces and punct. Changes to lowercase.
	term = term.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
	term = term.replace(/–/g, "")
	term = term.replace(/ /g, "");
	term = term.toLowerCase();
	
	//Create a new version of the string but backwards
	var newTerm = "";
	for(var i = term.length - 1; i > -1; i--){
		newTerm = newTerm.concat(term[i]);
	}
	
	//Check to see if the term is the same backwards
	if(newTerm == term){
		return true;
	}
	return false;
}


// Export the functions under test:
module.exports = {
    findUniqueNumbers,
    isPalindrome,
    sortArray
};
