//Question 1. Write a function that takes a name and returns a greeting.
function greetUser(name) {  //declares a function with parameter name
  return "Hello, " + name + "! Welcome to JavaScript."; //sends the message back .."name" calls the function .."+" combines strings and variable
}

console.log(greetUser("John"));  //prints the name


//Question 2. calculate area that takes length and width of a rectangle
function calculateArea(length, width) {  //formula for rectangle area, lenght and width are functions
  return length * width;  //sends the results...
} 

console.log(calculateArea(5, 8));


//Question 3. check if a number is even
function isEven(number) {  //% operator → gives remainder
  return number % 2 === 0;  //number % 2 === 0 → true if divisible by 2.."return" sends the boolean value
}

console.log(isEven(6)); // true
console.log(isEven(7)); // false


//Question 4. celsius To Fahrenheit
function celsiusToFahrenheit(celsius) {  //function
  return (celsius * 9/5) + 32;  //formul;a..."return" sends the converted temperature
}

console.log(celsiusToFahrenheit(25));  //prints the output




