"use strict";

// training on loops on objects

//1- Declare a variable that holds an empty object literal (your meal recipe).

let myMeal = {};

//2- Give the object 3 properties: a title (string), a servings (number) and an ingredients (array of strings) property.

myMeal.title = "Chicken Crispy";
myMeal.servings = 4;
myMeal.ingredients = ["Chicken wings", "Curry suase", "tow eggs"];

//3- Log each property out separately, using a loop (for, while or do/while)

for (let prop in myMeal) {
    console.log(`The property is ${prop} and it's value is ${myMeal[prop]}`);
}
