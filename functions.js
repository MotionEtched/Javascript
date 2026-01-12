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


//Question 5. find max
function findMax(arr) {  //declares a function names arr
  let max = arr[0];  //creates a variable max to keep track of the largest number found so far
  for (let i = 1; i < arr.length; i++) {  //starts a for loop to go through the array from the second element (i = 1) to the last element
    if (arr[i] > max) {   //checks if the current element (arr[i]) is greater than the current max
      max = arr[i];  //updates max to the new largest number found
    }
  }
  return max; //returns the largest number found in the array
}

console.log(findMax([3, 7, 2, 9, 1]));  //calls the findMax function with the array [3, 7, 2, 9, 1]....and prints the returned largest number


//Question 6. reverse string
function reverseString(str) {  //declares a function named reverseString
  let reversed = "";  //creates an empty string reversed to store the reversed string as we build it
  for (let i = str.length - 1; i >= 0; i--) {  //loop starts from the last character of the string: str.length - 1
    reversed += str[i];  //adds the current character (str[i]) to the reversed string
  }
  return reversed;  //returns the reversed string
}

console.log(reverseString("hello"));  //calls the function with "hello"...prints the result of the function


//Question 7. create username
function createUsername(firstName, lastName = "User") {  //declares a function with firstName and optional lastName defaulting to "User"
  return (firstName + "_" + lastName).toLowerCase();  //combines names with _ and converts to lowercase
}

console.log(createUsername("John", "Smith")); // John_smith ...calls the function with both names, prints
console.log(createUsername("John"));          // John_user... calls function with only first name, prints "ana_user"




