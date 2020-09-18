"use strict";

/*In this project you'll write a function that calculates grades, based on the American grading system! Let's say a student did a test and they got a 60 out of 100, this function will:

1- convert the score into a percentage
2- calculate what grade corresponds with that percentage, and
3- shows in the command line the result: the grade and the percentage*/

// creating the grade calculator funciton .

function gradeCalculator(grade) {
    // declaring the res variable which will contain the result of our calculator

    let res;

    // switch statment to give the res variable a value of [A or B or C or D or E or F] based on the score which is given as a parameter in our function

    switch (true) {
        // here in Case 1 we are checken if the grade is equal or greater than 90 and at the same time is equal or less than 100 then our variable res will be 'A'
        case grade >= 90 && grade <= 100:
            res = "A";
            // break statment to stop the function here if the first case is matched
            break;
        // same logic but difference in ranges and value of res based on the grade
        case grade >= 80 && grade <= 89:
            res = "B";

            break;

        case grade >= 70 && grade <= 79:
            res = "C";

            break;

        case grade >= 60 && grade <= 69:
            res = "D";

            break;

        case grade >= 50 && grade <= 59:
            res = "E";

            break;

        case grade >= 0 && grade <= 49:
            res = "F";

            break;
    }

    console.log(`You got ${res} ${grade}%`);
}

gradeCalculator(75);
gradeCalculator(95);
gradeCalculator(35);
