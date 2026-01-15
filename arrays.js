// Question 1. Create an array & print all elements using a loop
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}


//Question 2. Find the sum of all elements
let arr = [10, 20, 30];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);


//Question 3. Find the largest number
let value = [3, 7, 2, 9, 1];
let max = value[0];

for (let i = 1; i < value.length; i++) {
  if (value[i] > max) {
    max = value[i];
  }
}

console.log(max);


//Question 4. Count even and odd numbers
let arr1 = [1, 2, 3, 4, 5];
let even = 0, odd = 0;

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] % 2 === 0) even++;
  else odd++;
}

console.log("Even:", even);
console.log("Odd:", odd);


//Question 5. Reverse an array (no reverse())
let arr2 = [1, 2, 3, 4];
let reversed = [];

for (let i = arr2.length - 1; i >= 0; i--) {
  reversed.push(arr2[i]);
}

console.log(reversed);


//Question 6. Check element exists & print index
let arr3 = [10, 20, 30, 40];
let target = 30;
let found = false;

for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] === target) {
    console.log("Index:", i);
    found = true;
    break;
  }
}

if (!found) {
  console.log("Element not found");
}


//Question 7. Remove duplicates
let arr4 = [1, 2, 2, 3, 4, 4];
let unique = [];

for (let i = 0; i < arr4.length; i++) {
  if (!unique.includes(arr[i])) {
    unique.push(arr4[i]);
  }
}

console.log(unique);


//Question 8. Find second largest number (no sorting)
let arr5 = [10, 5, 20, 8];
let max1 = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < arr5.length; i++) {
  if (arr5[i] > max1) {
    secondMax = max1;
    max1 = arr5[i];
  } else if (arr5[i] > secondMax && arr5[i] !== max1) {
    secondMax = arr5[i];
  }
}

console.log(secondMax);


//Question 9. Rotate array right by one
let arr6 = [1, 2, 3, 4];
let last = arr6[arr6.length - 1];

for (let i = arr6.length - 1; i > 0; i--) {
  arr6[i] = arr6[i - 1];
}

arr[0] = last;
console.log(arr6);


