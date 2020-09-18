"use strict";
// an exercise to train on spilt and join methods

// 1- Add the variable to your file.

let myString = "hello,this,is,a,difficult,to,read,sentence";

// 2- Log the length of myString..

console.log(myString.length);

/* using the spilt command to have an array including the elements before and after the comma , then on the same line using the join method to convert the new
 array into a string again replacing the , with spaces
*/
const myNewString = myString.split(",").join(" ");

console.log(myNewString);

// Another sulotion using the replace() method .

// here we are replacing the , with a space and we used the g flag to make it general so it will replace all the commas in the string not only the first one

let myReplacedString = myString.replace(/,/g, " ");

console.log(myReplacedString);
