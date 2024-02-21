/**     TIME COMPLEXITY
 *
 * Assignment Operation (=) --> complexity O(1)
 * Comparison Operation ( a > b, ==, === etc) --> complexity O(1)
 * Mathematical Operation (a+b) --> complexity O(1)
 * Calling a Function
 * Executing Time of a Function (time required for complete the inner workflow)
 *
 * Complexity is measured with big "O" notation.
 *
 */

// Example-1:

const num1 = 10; // assignment operation --> complexity O(1)
const num2 = 20; // assignment operation --> complexity O(1)
const result = num1 + num2; // assignment and addition operation --> complexity O(1)
console.log(result);
// the complexity of the program above is O(1). The number of operation is not dependant on the inputs.

// Example-2:

const n = 20;
const result2 = (n * (n + 1)) / 2; // math operation (3) + assignment operation (1)
console.log(result2);
// the complexity for the program above is O(1).



// Example-3:

let digit = 10; // assignment operation
let sum = 0; // assignment operation
for (let i = 1; i <= digit; i++) {
    sum += i;
}
console.log("The sum of the sequence is " + sum);
// In the program above execution of the for loop is dependent on digit, here the loop executed 10 times as digit. So, execution of function is proportional to digit. So the complexity of the program is "O(n)"
