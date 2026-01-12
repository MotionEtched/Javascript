
//print 1-10
for (let i = 1; i<=10; i++){
    console.log(i);
}


//print even numbers
for (let i = 1; i<=20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
    
}


//sum of first 10 natural numbers

let sum  = 0;

for (let i = 1; i <= 10; i++){
    sum += i;
}
console.log(sum);


//table of 6
for (let i = 10; i>=1; i--){
    console.log("print", i);
}

for (let i=1; i<=10; i++){
    console.log (`6 x ${i} = ${6 * i}`);
}


//print stars pattern
for (let i=1; i<=5; i++) {
    let stars = "";

    for (let j=1; j<=i; j++) {
        stars += "*";
    }
    console.log (stars);
}


//Question 1. To check whether the number is prime or not
let num = 7;          //stores the number to be checked
let count = 0;          //tracks the factor of the number

for (let i = 1; i <= num; i++) {          //loop runs from 1
  if (num % i === 0) {          //% checks remainder.. if remainder is 0 then..i is a factor
    count++;          //increases factor count whenever divisor is found
  }
}

if (count === 2) {          //exactly 2 factor then the number is prime....more or fewer is not prime
  console.log(num + " is a prime number");
} else {
  console.log(num + " is not a prime number");
}


//Question 2. take a number and reverse it
let num = 1234;  //stores the number to be checked
let reverse = 0;  //stores the reversed number...starts from 0..

while (num > 0) {   //the loop runs until all digits are processed..each loops removes one digit from num..
  let digit = num % 10;  //%10 extracts the last digit of the number
  reverse = reverse * 10 + digit;  //shifts existing digits left... and adds the new digit at the end
  num = Math.floor(num / 10);  //removes the last digit from the number.. (Math.floor) removes decimals
}

console.log("Reversed number is " + reverse);  //prints the reversed number


//Question 3. count how many digits are in a number
let num = 12345;  //stores the number
let count = 0;  //stores the total number of digit

while (num > 0) {  //loops runs as long as the number is greater than 0
  count++;  //increases the digit count by 1
  num = Math.floor(num / 10);   //removes the last digit of the number
}

console.log("Number of digits = " + count);  //prints the total number of digits


//Question 4. print the first N Fibonacci numbers
let n = 7;  //stores how many numbers to print
let a = 0, b = 1;  //a= first fibonacci number , b=second fibonacci number

for (let i = 1; i <= n; i++) {  //loop runs n times
  console.log(a);  //prints the current fibonacci number
  let next = a + b;  //adds the previous two number
  a = b;  //moves forward
  b = next;
}
