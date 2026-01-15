// Question 1. Create an object and print all properties
const person = {
  name: "John",
  age: 20,
  city: "Kathmandu"
};

console.log(person);

// Question 2. Access and print a specific property
console.log(person.name);


//Question 3. Add a new property & update an existing one
person.country = "Nepal";   // add new property
person.age = 21;            // update existing property

console.log(person);


//Question 4. Delete a property and print object
delete person.city;
console.log(person);


//Question 5. Loop through all properties
for (let key in person) {
  console.log(key + ":", person[key]);
}


// Question 6. Check if a property exists
console.log("age" in person);     // true
console.log("salary" in person);  // false


//Question 7. Count total number of properties
const count = Object.keys(person).length;
console.log(count);


//Question 8. Convert object into keys array & values array
const keys = Object.keys(person);
const values = Object.values(person);

console.log(keys);
console.log(values);


//Question 9. Find property with highest value
const scores = {
  math: 85,
  science: 92,
  english: 88
};

let maxKey = "";
let maxValue = -Infinity;

for (let key in scores) {
  if (scores[key] > maxValue) {
    maxValue = scores[key];
    maxKey = key;
  }
}

console.log(maxKey, maxValue);


//Question 10. Merge two objects (NO built-in merge)
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const merged = {};

for (let key in obj1) {
  merged[key] = obj1[key];
}

for (let key in obj2) {
  merged[key] = obj2[key];
}

console.log(merged);