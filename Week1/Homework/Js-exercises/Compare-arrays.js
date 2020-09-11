"use strict";

/*Declare 2 variables, that each hold an array. The first array should have 4 items, the second 7 items
Find out how to get the length of each array. Write a console.log statement that shows the length of each array
Write a conditional statement that checks if both are of equal length. If they are, log to the console They are the same!, if not log Two different sizes
*/

let mySkills = ["HTML", "CSS", "JavaScript", "Java"];
let food = ["Meat", "Fish", "fastfood", "Rice", "Sandwish", "Kebab", "Sushi"];

console.log(
    `The length of mySkill is : ${mySkills.length} \n The length of food is : ${food.length}`
);

if (mySkills.length === food.length) {
    console.log("The length is the same!!");
} else {
    console.log("The length is not the same!!");
}
