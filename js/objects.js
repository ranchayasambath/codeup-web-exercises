(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
let person = {
        firstName: "Jack",
        lastName: "Sambath",
        sayHello: function (){
            // return "Hello from " + this.firstName + " " + this.lastName;
        }
    }
    console.log(person.firstName);
    console.log(person.lastName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function(){
    return "Hello from "+ this.firstName+ " " +this.lastName+"!"
}
    console.log(person.sayHello());
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    shoppers.forEach(function (shopper,index){
        // console.log(shopper);
        // console.log(shopper.amount);
        let discount = shopper.amount * .12
        let discountedTotal = shopper.amount - discount;
        if (shopper.amount > 200) {
            console.log(`${shopper.name}gets a discount
            The original price was $${shopper.amount},
            The discount is $${discount}
            The total due is $${discountedTotal}`);
        }else{
            console.log(`${shopper.name} does  not get a discount
            the total due is $${shopper.amount}`);
        }
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let books = [{
        title:"The Great Gatsby",
        author:{
            firstName: "F Scott",
            lastName:"Fitzgerald",
        }},{
        title:"12 Rules for Life",
        author:{
            firstName:"Jordan",
            lastName: "Peterson",
        }},{
        title:"The Salmon of Doubt",
        author:{
            firstName: "Douglas",
            lastName:"Doctorow",
        }},{
        title:"Walkaway",
        author:{
            firstName:"Cory",
            lastName: "Adamns",
        }},{
        title:"A Brief History of Time",
        author:{
            firstName:"Stephen",
            lastName: "Hawking",
        }},

    ];
    books.forEach(function(book){
        console.log(book);
    });
    // console.log(books[0].title);
    // console.log(books[0].author.firstName);
    // console.log(books[0].author.lastName);
    // console.log("---");
    // console.log(books[1].title);
    // console.log(books[1].author.firstName);
    // console.log(books[1].author.lastName);
    // console.log("---");
    // console.log(books[2].title);
    // console.log(books[2].author.firstName);
    // console.log(books[2].author.lastName);
    // console.log("---");
    // console.log(books[3].title);
    // console.log(books[3].author.firstName);
    // console.log(books[3].author.lastName);
    // console.log("---");
    // console.log(books[4].title);
    // console.log(books[4].author.firstName);
    // console.log(books[4].author.lastName);
    // console.log("---");


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
// var bookLoop = [{Book: "1",
//         title: "The Salmon of Doubt",
//         Author: "Douglas Adamns"},
//         {Book:"2",
//             title: "Walkaway",
//             Author: "Cory Doctorow"},
//         {Book:"3",
//             title: "A Brief History of Time",
//             Author: "Stephen Hawking"}];
//     bookLoop.forEach(function(book){
//         console.log("Book # "+book.Book[0].bookLoop);
//         console.log("Title: "+book.title);
//         console.log("Author: "+book.Author);
//         console.log("---");
//     });
// var loop = {
//         Book:["1","2","3"],
//         title:["The Salmon of Doubt","Walkaway","A Brief History of Time"],
//         Author:{
//             firstName: ["Douglas", "Cory", "Stephen"],
//             lastName:["Adamns","Doctorow","Hawking"]}};
//
    // });

    books.forEach(function(book,index){
        console.log(`Book #: ${index +1}\nTitle: ${book.title}\nArthor: ${book.author.firstName}\n${book.author.lastName}
        ${"---"}`)
    });



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    books.createBook = function(title, authorFirstName, authorLastName) {
        this.push({ title: title, author: { firstName: authorFirstName, lastName: authorLastName} });
    }
//REFACTOR:
    books.createBook("All Tomorrows: The Future Of Humanity", "C.M.", "Kösemen")

    let showBookInfo = function(index, book) {
        console.log(`Book # ${index + 1}\nTitle: ${book.title}\nAuthor: ${book.author.firstName} ${book.author.lastName}`);
    }
//REFACTOR:
    books.forEach(function (book, index) {
        showBookInfo(index, book);
    });

})();