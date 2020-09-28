"use strict";

/* 1- Write a function named calculateDogAge.
   2- It takes 1 argument: your (fictional) puppy's age (number).
   3- Calculate your dog's age based on the conversion rate of 1 human year to 7 dog years.
   4- Return a string: "Your doggie is [CALCULATED_VALUE] years old in dog years!"
   5- Call the function three times with different sets of values.
*/

function calculateDogAge(age) {
    let outPut = age * 7;

    // we have been asked to use return to return a string!
    return `Your doggie is ${outPut} years old in dog years!`;
}

// to check the out put we must print the whole function into the log, since we used return in the function not console.log
console.log(calculateDogAge(3));
console.log(calculateDogAge(2));
console.log(calculateDogAge(5));
