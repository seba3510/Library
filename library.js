const form = document.querySelector("form");

const titleElem = document.querySelector("#book-title");
const authorElem = document.querySelector("#book-author");
const numPagesElem = document.querySelector("#num-pages");

const dialogElem = document.querySelector("#dialog");



//=======================================================================================================

/**
 * Array of objects that stores all books of the library.
 * 
 * @type {Book}
 * 
 * @note I manually added a few books to the array so I can see the display
 */
let library = [
    {
        "title": "The Hunger Games",
        "author": "Suzanne Collins",
        "pages": 400,
        "read": true
    },

    {
        "title": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "pages": 320,
        "read": false
    },

    {
        "title": "A Tale of Two Cities",
        "author": "Charles Dickens",
        "pages": 428,
        "read": false
    }
];

//=======================================================================================================

/**
 * Creates a new Book object 
 * 
 * @param {String} title  The title of the book 
 * @param {String} author  The author of the book
 * @param {Number} pages  The total number of pages that the book has
 * @param {Boolean} read   Status that indicates whether the book has been read, or not
 */
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}//Book()

//=======================================================================================================

/**
 * Displays the form when the user clicks on the button
 * 
 * This function listens for a click event on the button with the ID "open-modal".
 * When the button is clicked, it shows a modal dialog (assumed to be stored in the `dialogElem` variable).
 */
function displayForm() {

    // Select the button element with the ID "open-modal"
    const btn = document.querySelector("#open-modal");

    // Add an event listener to the button that listens for the "click" event
    btn.addEventListener("click", () => {
        // Show the modal dialog when the button is clicked
        dialogElem.showModal();
    });

} // displayForm()

//=======================================================================================================

/**
 * Handles the button click by calling displayForm.
 * 
 * This function is a wrapper around the `displayForm` function. It can be used to
 * trigger the display of the form/modal, likely in response to some other logic or user interaction.
 */
function handleClick() {
    displayForm(); // Call displayForm to show the modal when this function is executed

} // handleClick()




handleClick();