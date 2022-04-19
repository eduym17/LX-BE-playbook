// Example 1. Prints each array item for a given array
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34,'...'];
console.log("E1: prints every array item (Fibonacci)");
fibonacci.forEach(item => console.log(item));

// Example 2. Prints the sum of all items inside the array
const fibonacciOne = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
let sum = 0;
fibonacciOne.forEach(item => sum += item);
console.log("E2: prints sum of the array:", sum);

// Example 3. Prints string items in upperCase
const foods = ['Paella', 'Tacos', 'Comida China', 'Comida Italiana'];
console.log("E3: prints foods in upperCase:")
foods.forEach(item => console.log(item.toUpperCase()));

// Example 4. Prints a new array with the square value of original (.map() method)
const fibonacciSquare = fibonacciOne.map(function(number){ return number * number });
console.log("E4: prints square value for each array position:");
console.log(fibonacciSquare);

// Example 5. Using .map() method to convert all to lowerCase
const foodsLowerCase = foods.map(function(item){ return item.toLocaleLowerCase()});
console.log("E5: prints foods array in lowerCase:", foodsLowerCase);

// Example 6. Foods array to upperCase using .map() method, first 3 letters
const foodsUpperCase = foods.map(function(item){ return item.toUpperCase().slice(0, 3)});
console.log("E6: prints foods array in upperCase, first 3 letters:", foodsUpperCase);

// Example 7. Filter array content
const foodsFilterCom = foods.filter((string) => string.includes('Com'));
const foodsFilterO = foods.filter((string) => string.includes('o'));
console.log("E7: food contains 'Com' word:", foodsFilterCom);
console.log("E7: food contains 'o' letter:", foodsFilterO);

//Example 8. Conditional console logging
const scores = [
  {name: "One", score: 100},
  {name: "Two", score: 90},
  {name: "Three", score: 80},
  {name: "Four", score: 70},
  {name: "Five", score: 60},
  {name: "Six", score: 50},
  {name: "Seven", score: 40},
  {name: "Eight", score: 30},
]
const scoresFilter = scores.filter((item) => item.score > 59);
console.log("E8: prints scores above 59:", scoresFilter);

// Example 9. Reduce function
const fibonacciOneReduce = fibonacciOne.reduce((accumulator, item) => accumulator + item, 0);
console.log("E9: prints sum of array:", fibonacciOneReduce);

// Example 10. Every method
const foodsAllStrings = foods.every((item) => typeof item === 'string');
console.log("E10: all the items in foods array are strings?", foodsAllStrings);

// Example 11. Find method
const number = fibonacciOne.find((number) => number > 15);
console.log("E11: first number above 15 in Fibonacci series:", number);

// Example 12. Find method in objects
const scoresUnder80 = scores.find((name) => name.score < 80);
console.log("E12: first score under 80 name:", scoresUnder80.name);

// Example 13. findIndex method
const result = foods.findIndex((item) => item.length > 7);
console.log("E13: first element with more than 7 characters is in the following position:", result);

// Example 14. .some() method
const bools = [true, false, true, false];
const boolsValidation = bools.some((el) => el === false);
console.log("E14: Is any of the elements false?", boolsValidation);

// Example 15. .sort() method
const numbers = ['a', 'z', 'b', 'x', 'c', 'w', 'd', 'y'];
console.log("E15: sorts array items:", numbers.sort());

// Example 16. Ordered object list
const users = [
  { name: 'A', age: 150 },
  { name: 'B', age: 50 },
  { name: 'C', age: 100 },
  { name: 'D', age: 22 },
];
users.sort((a, b) => { // podemos invocar una función
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
});
console.log("E16: ascending sort users age:", users);