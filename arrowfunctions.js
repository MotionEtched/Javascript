//Question 1. Write a function that takes a name and returns a greeting.
const user = (name) =>{ 
  return "Hello, " + name + "! Welcome to JavaScript.";
}

console.log(user("John"));  //prints the name


//Question 2. calculate area that takes length and width of a rectangle
const calculateArea = (length, width) => length * width ; 
console.log(calculateArea(5, 8));


//Question 3. check if a number is even
const isEven = (number) => {  
  return number % 2 === 0;  
}

console.log(isEven(6)); // true
console.log(isEven(7)); // false


//Question 4. celsius To Fahrenheit
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32 ;  
console.log(celsiusToFahrenheit(25));  


//Question 5. find max
const findMax = (arr) => {  
  let max = arr[0];  
  for (let i = 1; i < arr.length; i++) {  
    if (arr[i] > max) {   
      max = arr[i];  
    }
  }
  return max; 
}

console.log(findMax([3, 7, 2, 9, 1]));  


//Question 6. reverse string
const reverseString = (str) => {  
  let reversed = "";  
  for (let i = str.length - 1; i >= 0; i--) {  
    reversed += str[i];  
  }
  return reversed; 
}

console.log(reverseString("hello"));  


//Question 7. create username
const createUsername = (firstName, lastName = "User") => {  
  return (firstName + "_" + lastName).toLowerCase();  
}

console.log(createUsername("John", "Smith")); 
console.log(createUsername("John"));          


//Question 8. apply operation
const applyOperation = (a, b, operation) => {   
  return operation(a, b);  
}

function add(x, y) { return x + y; }   
function multiply(x, y) { return x * y; }   

console.log(applyOperation(5, 3, add));       
console.log(applyOperation(5, 3, multiply));  


//Question 9. filter adults
const filterAdults = (ages) => {  
  return ages.filter(age => age >= 18);   
}

console.log(filterAdults([12, 17, 18, 21, 15]));   


//Question 10. calculate grade
const calculateGrade = (score) => {   
  if (score >= 90) return "A";   
  else if (score >= 80) return "B";   
  else if (score >= 70) return "C";  
  else if (score >= 60) return "D";   
  else return "F";  
}

console.log(calculateGrade(85)); 


//Question 11. palindrome
const isPalindrome = (str) => {   
  let cleanStr = str.replace(/\s+/g, '').toLowerCase();   
  let reversed = cleanStr.split('').reverse().join('');   
  return cleanStr === reversed;  
}

console.log(isPalindrome("Madam"));         
console.log(isPalindrome("Hello World"));   
