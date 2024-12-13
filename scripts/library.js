// Stores all of the books
const books = [];

/**
 * Reference to the button that is used to add a new book.
 * 
 * @type {HTMLElement}
 */
const button = document.getElementById("add");

/**
 * Initializes a book.
 * 
 * @param {String} title - The title of the book.
 * @param {String} author - The author of the book.
 * @param {Number} pages - The total number of pages that the book has.
 * @param {Boolean} read - Determines if the user has read the book or not.
 * @param {Number} price - The price for which the book was bought.
 */
function Book(title, author, pages, read, price) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.price = price;
}// Book()

//==================================================================================

function addBook() {
    button.addEventListener("click", () => {
        let msg = "You have clicked me!";
        alert(msg);
    });
}//handleClick()

addBook();