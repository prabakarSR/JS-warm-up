/* Given a word, "getLengthOfWord" returns the length of the given word. */

function getLengthOfWord(word1) {
	///Your code Starts here 
	if (word1 != "") {
		return word1.length;
	} else if (word1 == "") {
		return 0;
	} else {
		return -1;
	}
	
	
	
	///Your code Ends here
}
/*
Lines For TestCase

getLengthOfWord("GUVI");
getLengthOfWord("");
getLengthOfWord();
getLengthOfWord(9);
*/