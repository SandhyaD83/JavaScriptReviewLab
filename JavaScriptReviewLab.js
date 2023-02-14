//I. Variables & Datatypes
//How do we assign a value to a variable?
let x = 20;
console.log(`${x} is assigned to x`);
//How do we change the value of a variable?
x = 15
console.log(`x value is changed to ${x}`);
//How do we assign an existing variable to a new variable?
let y = x;
console.log(`y is ${y}`)
//Remind me, what are declare, assign, and define?
//declaring a variable:uses a keyword to establish
let p;
//assigning a value to the variable: uses = operator to associate value
p = 5;
//defining a variable
let q = 10;
//pseudocoding helps organization
/*What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
ans:60-40*/
/* 1.Create a variable called firstVariable
   2.Assign it the value of the string "Hello World"
   3.Change the value of this variable to some number
   4.Store the value of firstVariable in a new variable called 
     secondVariable
   5.Change the value of secondVariable to any string.
   6.What is the value of firstVariable?
   7.Create a variable called yourName and set it equal to your name 
     as a string. Then, write an expression that takes the string 
    "Hello, my name is " and the variable yourName so that it returns 
     a new string with them concatenated.*/

let firstVariable;
firstVariable = "Hello World";
firstVariable = 15;
let secondVariable = firstVariable;
secondVariable = "anystring"
console.log(firstVariable)
let yourName = "Sandhya"
let hello = `Hello, my name is ${yourName}`;
console.log(hello);

/*Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console*/

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a != b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');
/*D. The farm
1.Declare a variable animal. Set it to be either "cow" or something else
2.Write code that will print out "mooooo" if the it is equal to cow
3.Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
4.Commit
*/
let animal = "Cow"
if (animal === "Cow") {
  console.log("Mooooo");
}
else {
  cosole.log(`Hey! You're not a Cow`)
}
/*E. Driver's Ed
1.Make a variable that holds a person's age; be semantic
2.Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."*/

let age = 15;
if (age >= 16) {
  console.log("Here are the keys!")
}
else {
  console.log("Sorry, you're too young.")
}

//II. Loops
/* A. The basics
Write a loop that will print out all the numbers from 0 to 10, inclusive
Write a loop that will print out all the numbers from 10 up to and including 400
Write a loop that will print out every third number starting with 12 and going no higher than 4000 */
console.log("Below are numbers from 1 to 10")
for (let i = 0; i <= 10; i++) {
  console.log(`number ${i}`);
}
/*console.log("Below are numbers from 10 to 400")
for(let i=10; i<=400; i++)
  {
    console.log(`number ${i}`);
  }
console.log("Below are numbers from 12 to 4000")
for(let i = 12; i<=4000; i+=3)
  {
    console.log(i);
  }*/
/*B. Get even
1.Print out the numbers that are within the range of 1 - 100
2.Adjust your code to add a message next to even numbers only that says: "<-- is an even number"*/
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`${i} <-- is an even number`);
  }
}
/*C. Give me Five
For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five*/
for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`I found a ${i}. Three is a crowd and High five `)
  }
  /*Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three*/
  else if (i % 3 === 0) {
    console.log(`I found a ${i}. Three is a crowd`)
  }
  else if (i % 5 === 0) {
    console.log(`I found a ${i}. High five`)
  }
}
//D. Savings account
/*Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
Check your work! Your bank_account should have $55 in it.

You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your bank_account should have $10,100 in it.*/
let bank_account = 0;
for (let i = 1; i <= 10; i++) {
  bank_account += i;
}
console.log(`Balance is : ${bank_account}`)

let account_balance = 0;
for (let i = 1; i <= 100; i++) {
  account_balance += i;
}
console.log(account_balance * 2)
//A. Talk about it:
//What are the things in an array called?
//ans:items,indices
//Do Arrays guarantee those things will be in order?
//ans:yes
//What real-life thing could you model with an array?
//names
//B. Easy Does It
//Create an array that contains three quotes and store it in a variable called quotes
let quotes = ["sdhfds", "hdfshfd", "hfdhf"]
/*
C. Accessing elements
Given the following array const randomThings = [1, 10, "Hello", true]

How do you access the 1st element in the array?
Change the value of "Hello"to "World"
Check the value of the array to make sure it updated the array. How? Why, yes! console.log();*/

const randomThings = [1, 10, "Hello", true]
console.log(randomThings[0]);
randomThings[2] = "World"
console.log(randomThings);
/* D.Change values
Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
What would you write to access the 3rd element of the array?
Change the value of "Github" to "Octocat"
Add a new element, "Cloud City" to the array*/

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
ourClass[2];
ourClass[4] = "Octocat";
ourClass.push("cloud City")
/* E. Mix It Up
Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

Given the following array: const myArray = [5, 10, 500, 20]

Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
Remove the 5from the beginning of the array.
Add the string "Bob Marley"to the beginning of the array.
Remove the string of your choice from the end of the array.
Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?*/
const myArray = [5, 10, 500, 20]
myArray.push("Aegon")
myArray.push("strOfMychoice")
console.log(myArray)
myArray.shift()
//console.log(myArray)
myArray.unshift("Bob Marley")
//console.log(myArray)
myArray.pop()
//console.log(myArray)
myArray.reverse()
console.log(myArray)
/*F. Biggie Smalls
Create a variable that contains an integer.

Write an if ... elsestatement that:

console.log()s "little number" if the number is entered is less than 100
console.log()s big numberif the number is greater than or equal to 100.*/
let number = 9
if (number < 100) {
  console.log("Little number")
} else {
  console.log("Big number")
}
/*


G. Monkey in the Middle
Write an if ... else if ... elsestatement:

console.log()little numberif the number entered is less than 5.
If the number entered is more than 10, log big number.
Otherwise, log "monkey".*/

let number1 = 9
if (number1 < 5) {
  console.log("Little number")
} else if (number > 10) {
  console.log("Big number")
}

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ], [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ], [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
/*What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console*/
console.log(`Kristyn is rocking that  ${kristynsCloset[2]} in Kristyn's closet today!`)
/*Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat"*/
kristynsCloset.splice(6, 0, "raybans")

console.log(kristynsCloset)
/*Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.*/
kristynsCloset[5] = "stained knit hat"
/*Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.*/
/*In the same way, access one item from Thom's pants array.*/
//Access one item from Thom's accessories array.
/*Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"*/
/*Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
*/
thomsCloset[0][0]
thomsCloset[1][1]
thomsCloset[2][1]

console.log(`Thom is looking fierce in a ${thomsCloset[0][0]} , ${thomsCloset[1][1]} and ${thomsCloset[2][1]}`)

thomsCloset[1][2] = "Footie Pajamas"
console.log(thomsCloset)
//IV. Functions
//B. printCool
/*Write a function printCoolthat accepts one parameter, namevas an argument. The function should print the name and a message saying that that person is cool.*/
function printCool(name) {
  console.log(`${name} is cool`)
}
printCool("Sandhya")
/*C. calculateCube
Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.*/
const calculateCube = (dimensions) => {
  let vol = dimensions ** 3
  console.log(`cube volume is: ${vol}`)
}
calculateCube(5)
//isVowel
const isVowel = (char) => {
  let vowels = ["a", "e", "i", "o", "u"]
  if (vowels.includes(char)) {
    console.log("Is Vowel")
  } else if (char === "y") {
    console.log("Sometimes. ")
  } else {
    console.log("Not a Vowel")
  }
}

isVowel('o')
isVowel('x')
//getTwoLengths

//getMultipleLengths
const getTwoLengths = (x, y) => {
  console.log(x.length, y.length)
}
getTwoLengths("Jordan", "Lea")

const getMultiLengths = (...longs) => {
  longs.forEach((x) => {
    console.log(x.length)
  })
}

getMultiLengths("apple", "banana", "nyc")

const maxOfThree = (a, b, c) => {
  let greaterNum;
  if (a > b) {
    console.log(a)
    greaterNum = a
  } else {
    console.log(b)
    greaterNum = b
  }

  if (greaterNum < c) {
    console.log("C WINS", c)
  } else {
    console.log(`${greaterNum} WINS`)
  }
}
maxOfThree(1, 43, 222)
maxOfThree(1, 433, 222)
maxOfThree(1221, 43, 222)


const printLongestWord = (arr) => {
  let biggest = 0
  let str = ""
  arr.forEach((word) => {
    if (word.length > biggest) {
      biggest = word.length
      str = word;
    }

  })
  console.log(str, "is Biggest")
}

printLongestWord(["apple", "banana", "strawberry", "grapes"])