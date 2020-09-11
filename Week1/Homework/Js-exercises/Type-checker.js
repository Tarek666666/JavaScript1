"use strict";

// creating the type checker function

function typeChecker(x, y) {
    if (typeof x === typeof y) {
        console.log("Variables Have the same type of data");
    } else {
        console.log("They are not the same");
    }
}

// Testing the function

let myString = "Tarek";
let myAge = 30;
let myHobbies = ["playing guitar", "swimming"];

typeChecker(myString, myHobbies);

// Variables

let x = 9;
let y = 67;
let z = ["Tarek", false, 30];
let i = { name: "Tarek" };

// check Data Type

console.log(typeof x, typeof y, typeof z, typeof i);

// Check if data type is the same

if (typeof x === typeof y) {
    console.log("Same type");
} else {
    console.log("Not the same");
}

if (typeof x === typeof z) {
    console.log("Same type");
} else {
    console.log("Not the same");
}

if (typeof x === typeof i) {
    console.log("Same type");
} else {
    console.log("Not the same");
}

if (typeof y === typeof z) {
    console.log("Same type");
} else {
    console.log("Not the same");
}

if (typeof y === typeof i) {
    console.log("Same type");
} else {
    console.log("Not the same");
}

if (typeof z === typeof i) {
    console.log("Same type");
} else {
    console.log("Not the same");
}
