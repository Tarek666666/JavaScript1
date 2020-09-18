"use strict";

/*1-Declare a variable that holds an array of 3 objects, where each object describes a book and has properties for the title (string), 
    author (string), and alreadyRead (boolean indicating if you read it yet).*/
//2-Loop through the array of books.
//3-For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
/*4-Create a conditional statement to change the log depending on whether you read it yet or not. If you read it, 
    log a string like You already read "The Hobbit" right after the log of the book details*/
//5-If you haven't read it log a string like You still need to read "The Lord of the Rings"

let myBooks = [
    {
        title: "The C Programming Language",
        author: "Andy Hunt",
        isReaded: false,
    },
    { title: "Clean Code", author: "Robert C. Martin", isReaded: true },
    {
        title: "The Mythical Man",
        author: "Frederick P. Brooks Jr.",
        isReaded: false,
    },
];

for (let book of myBooks) {
    console.log(`${book.title} written By : ${book.author}`);

    if (book.isReaded === true) {
        console.log(`You have already readed this book : ${book.title}`);
    } else {
        console.log(`You didn't read this book yet : ${book.title}`);
    }
}
