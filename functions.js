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
