"use strict";

/*  1- Write a function named giveCompliment
    2- It takes 1 argument: your name
    3- Inside the function define a variable that holds an array, compliments, with 10 strings. Each string should be a compliment, like "great", "awesome"
    4- Write code that randomly selects a compliment
    5- Return a string: "You are [COMPLIMENT], [YOUR_NAME]!
    6- Call the function three times, giving each function call the same argument: your name.
*/

function giveCompliment(name) {
    const complimentsArray = [
        " very nice",
        "Very helpful",
        "really amazing",
        "great!!",
        "Very Smart",
        "very good",
        " wonderful",
        "very impressive",
        "handy",
        "a beatiful person",
    ];
// creating a random number which will be the index so we can get a random number everytime, then we use it as an index of the array!!
    const randomElement = Math.floor(Math.random() * complimentsArray.length);

    console.log(` You Are ${complimentsArray[randomElement]}  ${name}`);
}

giveCompliment("Tarek");
giveCompliment("Tarek");
giveCompliment("Tarek");

