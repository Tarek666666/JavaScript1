"use strict";

/*In this project you'll write a function, called validateCreditNumber, that validates whether or not a credit card number is valid.

Here are the criteria for a valid number:

Input must be 16 characters
All characters must be numbers
At least two different numbers should be represented
The last number must be even
The sum of all the numbers must be greater than 16
*/

function validateCreditNumber(number) {
    

    // we convert the string into an array using spilt method so we can use the Array's method;
    let splittedNumber = number.split("");
    // checking if the  Input is 16 characters .
    if (number.length !== 16) {
        console.log(
            `Invalid!! The input ${number} Should be 16 characters , Not ${number.length}`
        );
    }
    // checking if there is a letter in the input, here we should use regular experssion and match method ;
    else if (number.match(/[A-Za-z]/)) {
        console.log(
            `Invalid!! The input ${number} Should Contain only numbers !!!`
        );
    }

    // another way to make sure that the input includes only numbers and also not special characters like @,!,+,etc ....
    // using every method to check if all elements in the array are numbers
    else if (!splittedNumber.every((char) => /^[0-9]/.test(char))) {
        console.log(
            `Invalid!! The input ${number} Should Contain only numbers !!!`
        );
    }

    //checking if  At least two different numbers should be represented, to solve it we need to compare the 0 index of our array to all index in this array
    // if its euqal then the input is only 1 number if its not then there is more than one number and it will be vaild
    else if (splittedNumber.every((x) => x === splittedNumber[0])) {
        console.log(
            `Invalid!! The input ${number} Should have more than only one number !!!`
        );
    }

    // The last number must be even
    // to get the last number in the string we use number.length - 1 ==> we get the last index then we check if its odd or even
    else if (number[number.length - 1] % 2 !== 0) {
        console.log(
            `Invalid!! The input ${number} Should end with an even number !!!`
        );
    }

    //The sum of all the numbers must be greater than 16
    // to make it we need to use reduce method to sum all the elements of the array and get the result to check if it's greater than 16 or not
    else if (splittedNumber.reduce((x, y) => parseInt(x) + parseInt(y)) < 16) {
        console.log(
            `Invalid!! The sum of input ${number}  must be 16 or greater !!!`
        );
    }

    else { `Success! The input ${number} is a valid credit card number!`  }
}

validateCreditNumber("0080010000111112");
validateCreditNumber("0080010000111113");
validateCreditNumber("00800100001111134");
validateCreditNumber("00800100001111@4");
validateCreditNumber("2222222222222222");
