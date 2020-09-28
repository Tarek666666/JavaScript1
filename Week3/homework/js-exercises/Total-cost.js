"use strict";

/* 1- Create an object named cartForParty with 5 properties. Each property should be a grocery item (like beers or chips) and hold a number value (like 1.75 or 0.99)
   2- Write a function called calculateTotalPrice
   3- It takes 1 argument: an object that contains properties that only contain number values
   4- Loop through the object and add all the number values together
   5- Return a string: "Total: €[TOTAL_PRICE_ITEMS]"
   6- Call the function 1 time, giving it the object cartForParty as an argument
*/

const cartForParty = {
    tomato: 2.35,
    lemon: 4.49,
    orange: 2,
    beers: 1.25,
    chips: 1,
};

function calculateTotalPrice(object) {
    // first of all we declare the totalPrice as variable and typeof number so we dont get NaN in our result when want to sum the values;
    let totalPrice = 0;

    // looping through the object to get the keys as itemPrice and the values of the keys as object[itemPrice];
    for (let itemPrice in object) {
        // the total price will be 0 + each value of proprites in the object ;

        totalPrice += object[itemPrice];
    }

    return totalPrice;
}

console.log(calculateTotalPrice(cartForParty));
