/*console.log('Hello World');

var petDog = "Rex";
var petCat = "Pepper";
console.log(petDog);
console.log(petCat);
console.log(`My pet dog's name is: ${petDog}.`);
console.log(`My pet cat's name is: ${petCat}.`);

var catSound = "purr";
var dogSound = "Woof";
console.log(`${petDog} says ${dogSound}.`);
console.log(`${petCat} says ${catSound}.`);

catSound = "meow";
console.log(`${petCat} now saye  ${catSound}.`);
*/

/* Arithmetic operators in javascript
    + Addition 
    - Subtraction
    * Multiplication
    / Division
    % Reminder
*/
// + Addition 
console.log(2 + 2);
console.log(27 + 21 + 30);
// - Subtraction
console.log(22 - 10);
console.log(22 - 7 - 4);
// * Multiplication
console.log(5 * 4);
console.log(5 * 4 * 5);
// / Division
console.log(20 / 4);
// % Reminder
console.log(20 % 7);

/* Comparison operators in javascript
    > greater than 
    >= greater than or equal 
    < less than
    <= less than or equal
    == Equal
    != Not Equal
*/
// > greater than 
console.log(30 > 20);
// >= greater than or equal
console.log(50 >= 35);
// < less than
console.log(21 < 17);
// <= less than or equal
console.log(49 <= 59);
// == Equal
console.log(50 == '50');
// != Not Equal
console.log(50 != 50);
console.log(11 ** 4);

var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);


//The concatenation assignment operator, +=
var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString);

var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log(overtime);

// Using the logical && operator
var score = 8;
console.log("Mid-level skills: " + (score > 0 && score < 10));

// Using the logical || operator
var timeRemaining = 0;
var energy = 10;
console.log("Game over: " + (timeRemaining == 0 || energy == 0));

// Using the modulus operator, %, to test if a given number is odd

var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log(`Is ${num1} an even number? ${result1}`);
console.log(`Is ${num2} an even number? ${result2}`);

// Add numbers using the + operator

console.log(5 + 10);

// Concatenate numbers and strings using the + operator

var now = "Now is";
var three = 3;
var d = "D!";
console.log(now + three + d);
console.log(now + three + d);
console.log(now + three + d);

// Use the += operator to accumulate values in a variable
var counter = 0;
counter += 5;
counter += 3;
console.log(counter);

console.log(2 + 2);
// Expected output: 4

console.log(2 + true);
// Expected output: 3

console.log('hello ' + 'everyone');
// Expected output: "hello everyone"

console.log(2001 + ': A Space Odyssey');
// Expected output: "2001: A Space Odyssey"