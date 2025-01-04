
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
 * @param {String} title - The title of the book 
 * @param {String} author - The author of the book
 * @param {Number} pages - The total number of pages that the book has
 * @param {Boolean} read - Status that indicates whether the book has been read, or not
 */
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}// Book()