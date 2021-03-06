"use strict";

/*Follow the steps. Make sure that each step is written on the line after.

Declare a variable z and assign the number 7.25 to it.
Write a console.log statement in which you log the value of z.
Declare another variable a that has the value of z but rounded to the nearest integer.
Write a console.log statement in which you log the value of a.
So now we have z and a find a way to compare the two values and store the highest of the two in a new variable.
Write a console.log statement in which you log the value of the highest value.*/

let z = 7.25;
console.log(z);

let a = Math.round(z);
console.log(a);

let highestValue = Math.max(z, a);
console.log(highestValue);
