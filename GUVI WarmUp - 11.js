/* Create a function that returns the number of frames shown in a given number of minutes for a certain FPS. */

function frames(num1, num2) {
	///Your code Starts here 
	let ans1 = num1;
	let ans2 = num2 * 60;
	let ans3 = num1 * ans2;
	return ans3;
	///Your code Ends here
}
/*
Lines For TestCase
frames(1, 1);
frames(10, 1);
frames(10, 25); 
*/