// Work in this directory: src
//1st assignment
let stringOne = "screen";
console.log(stringOne);

//2nd
//diff between "5" and 5 is that "5" is a string and 5 is a number;

//3rd
let numOne = 10;
console.log(numOne);

//4th
let boolOne = true;
console.log(boolOne);

//5th
//comparison, logical and some other operators. such as: ==, ===, !=, !==, >, <, >=, <= (comparison operators), &&, ||, ! (logical).

//6th
let greeting = "Hello";
let greetingUpper = greeting.toUpperCase();
console.log(greetingUpper);

//7th
let word = "World";
let wordLower = word.toLowerCase();
console.log(wordLower);

//8th
//so before it was Hello and after its HELLO;

//9th
//undefined

//10th
//so as we know JS is case sensitive, so the "C" in "toLowercase" should be in upper case;

//11th
//so in that code JS reads "age" as string and if we add some number to it, the number will be added as a string too, so to fix it we can change it like that:
/*
let age = prompt('How old are you?');
let nextAge = Number(age) + 1;
console.log(`Next year you will be ${nextAge}`);
*/

//12th
let name = prompt('What is your name?');
let age = Number(prompt('How old are you?'));
let isInSixties = age >= 60 && age < 70; 
console.log(`${name} is in sixties: ${isInSixties}`);

//13th
//so x++ increases x by 1 and but console.log(x++) will still show 5, cuz returns the old value,
//but after it if we write console.log(x) it will show 6, cuz x is increased by 1. (x++ returns the old value first, then increments the value);

//14th
//the value is 6 in both cases, cuz ++ at the start increments the value first, then returns the new value;

//15th
//x++ adds 1, x-- subtracts 1;

//16th
// ++x increments the value first, then returns the new value, x++ returns the old value first, then increments the value;

//17th
//undefined

//18th
let a = 10;
let b = '10';

console.log(a == b); //if we used === it would be wrong tho;

//19th
let x = 10;
let y = 11;

console.log(x != y);

let z = 10;
let d = "10";

console.log (z !== d);

//20th
//if we add string and number, the number just sticks to the string
//the number gets converted to string immediately;


