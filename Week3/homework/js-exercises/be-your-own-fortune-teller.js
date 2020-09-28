"use strict";

/* 1- Create 4 arrays, numChildren, partnerNames, locations and jobs. Give each array 5 random string values that have to do with the name of the variable
   2- Write a function named tellFortune.
   3- It takes 4 arguments: number of children (number), partner's name (string), geographic location (string), job title (string).
   4- Randomly select values from the arrays.
   5- Return a string: "You will be a [JOB_TITLE] in [LOCATION], married to [PARTNER_NAME] with [NUMBER_KIDS] kids."
   6- Call the function 3 times, by passing the arrays as the argument.
*/

const numChilderen = [1, 2, 3, 4, 5];
const partnerNames = ["Loubna", "Sara", "Mira", "Liza", "Marry"];
const locations = ["Netherland", "Germany", "Us", "Dubai", "Spain"];
const jobs = [
    "Taxi-driver",
    "Teacher",
    "Website developer",
    "Engineer",
    "Farmer",
];

function tellFortune(numChilderen, partnerNames, locations, jobs) {
    // since we know that all arrays has the same length so we put it as a static value of 5;
    let randomValue = Math.floor(Math.random() * 5);
    // everytime we execute the function it will give us a random value of each array
    let kidsNum = numChilderen[randomValue];
    let partner = partnerNames[randomValue];
    let location = locations[randomValue];
    let job = jobs[randomValue];
    //using console.log without using return so we don't have to log the funciton each time, only calling the funciton will give us the out put in the console

    // checking the number of the kids, if its more than 1 then it will be kids , if its only one then it will be kid.

    if (kidsNum > 1) {
        console.log(
            `You will be a ${job} in ${location}, married to ${partner} with ${kidsNum} kids.`
        );
    } else {
        console.log(
            `You will be a ${job} in ${location}, married to ${partner} with Only ${kidsNum} kid.`
        );
    }
}

tellFortune(numChilderen, partnerNames, locations, jobs);
tellFortune(numChilderen, partnerNames, locations, jobs);
tellFortune(numChilderen, partnerNames, locations, jobs);
