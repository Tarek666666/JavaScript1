"use strict";
//1- Declare a variable that holds an empty array, called drinkTray.

let drinkTray = [];

const drinkTypes = ["cola", "lemonade", "water"];

/*2- Create a loop that runs 5 times. On each iteration, push a drink into the drinkTray variable. The drinkTray can only hold at most two instances of 
the same drink type, for example it can only hold 2 colas, 2 lemonades, 2 waters. */
//3- If there are already two instances of a drinkType then start with the next drink in the array.
//4- Your drinkTray should contain 2 cola, 2 lemonade and 1 water.
//5- Log to the console: "Hey guys, I brought a [INSERT VALUES FROM ARRAY]!" (For example: "Hey guys, I brought a cola, cola, lemonade, lemonade, water!")

for (let i = 0; i < drinkTypes.length; i++) {
    // here the loop will iterate 5 times , so the index will be 1 , 2 , 3 , 4 , 5 >> but in drinkTypes array we have only three elemnts
    // which means only the first three elements will be pushed into drinkTray array then the last tow will be undefined so to solve this
    // we actually have to devide the index by 2, so the loop will be :
    // iterate 1 >>> index is 0 / 2 = 0 after using floor method ==> index 0 is cola;
    // iterate 2 >>> index is 1 / 2 = 0.5  after using floor method ==> index 0 is cola;
    // iterate 3 >>> index is 2 / 2 = 1   ==> index 1 is lemonade;
    // iterate 4 >>> index is 3 / 2 = 1.5  after using floor method ==> index 1 is lemonade;
    // iterate 5 >>> index is 4 / 2 = 2   ==> index 2 is water;

    drinkTray.push(drinkTypes[i])


    //drinkTray.push(drinkTypes[Math.floor(i / 2)]);
}

//console.log(`Hey Guyz , I brought ${drinkTray}`);
console.log(drinkTray);