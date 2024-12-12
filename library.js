// Stores all of the books
const books = [];

const button = document.getElementById("add");

/**
 * Initializes a book.
 * 
 * @param {String} title - The title of the book.
 * @param {String} author - The author of the book.
 * @param {Number} pages - The total number of pages that the book has.
 * @param {Boolean} read - Determines if the user has read the book or not.
 */
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}// Book()

//==================================================================================

function handleClick() {
    button.addEventListener("click", () => {
        let msg = "You have clicked me!";
        alert(msg);
    });
}//handleClick()

handleClick();