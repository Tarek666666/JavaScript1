"use strict";

/* 1- Create an array called shoppingCart that holds the following strings: "bananas" and "milk"
   2- Write a function named addToShoppingCart
   3- It takes 1 argument: a grocery item (string)
   4- Add grocery item to shoppingCart. If the amount of items is more than 3 remove the first one in the array
   5- Loops through the array in order to list out the items
   6- Return a string: "You bought [LIST_OF_GROCERY_ITEMS]!"
   7- Call the function 3 times, each time with a different string as the argument.
*/

const shoppingCart = ["bananas", "milk"];

function addToShoppingCart(item) {
    shoppingCart.push(item);
    // checking if the length of the array is greater than 3 then we will shift (delete) the first element in the array;
    if (shoppingCart.length > 3) {
        shoppingCart.shift();
    }
    // outPutString is the variable which will hold the result

    let outPutString = "You bought ";

    for (let groceryItem of shoppingCart) {
        //adding in each loop one value to the string
        outPutString += " " + groceryItem;
    }

    return outPutString;
}

console.log(addToShoppingCart("water"));
console.log(addToShoppingCart("Chocolate"));
console.log(addToShoppingCart("watermelon"));
