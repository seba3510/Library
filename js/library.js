
/**
 * Array of objects that stores all books of the library.
 * 
 * @type {Book}
 * 
 * @note I manually added a few books to the array so I can see the display
 */
// let library = [

//     {
//         "title": "The Hunger Games",
//         "author": "Suzanne Collins",
//         "pages": 400,
//         "read": true

//     },

//     {
//         "title": "Harry Potter and the Sorcerer's Stone",
//         "author": "J.K. Rowling",
//         "pages": 320,
//         "read": false
//     },

//     {
//         "title": "A Tale of Two Cities",
//         "author": "Charles Dickens",
//         "pages": 428,
//         "read": false
//     }
// ];

const library = [];

// const removeBookBtn = `<button id="remove-btn">
// <img src="../images/delete.png" id="remove-icon"></button>`

// const removeBtn = document.createElement("button");
// removeBtn.setAttribute("id", "remove-btn");

// const image = document.createElement("img");
// image.src = "../images/delete.png";
// image.setAttribute("id", "remove-icon");
// removeBtn.append(image);

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


//=======================================================================================================

/**
 * Adds the specified book to the library
 * 
 * @param {String} title 
 * @param {String} author 
 * @param {Number} pages 
 * @param {Boolean} read 
 */
function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    library.push(newBook);
}// addBookToLibrary()

//=======================================================================================================


/**
 * Displays  the list of books in the library onto a table
*/
function displayLibrary() {

    // Select the table element from the DOM
    const table = document.querySelector("table");

    // Make the table visible by setting its visibility style to 'visible'
    table.style.visibility = "visible";

    // Select the table body element where rows will be added
    const tableBody = document.querySelector("tbody");

    // Iterate over each book in the 'library' array
    library.forEach(book => {
        library.pop();
        // Create a new row element  for each book
        const row = document.createElement("tr");


        // Create a new cell  for the book's title and set its text content to the book's title
        const titleCell = document.createElement("td");
        titleCell.textContent = book.title;

        // Create a new cell for the book's author and set its text content to the book's author
        const authorCell = document.createElement("td");
        authorCell.textContent = book.author;

        // Create a new cell for the number of pages and set its text content
        const pagesCell = document.createElement("td");
        pagesCell.textContent = book.pages;

        // Create a new cell for the book's reading status and set its text content
        const statusCell = document.createElement("td");
        statusCell.textContent = book.read;

        // Create a new cell for the delete button
        const deleteBtnCell = document.createElement("td");

        // Create the delete button element
        const deleteBtn = document.createElement("button");

        deleteBtn.setAttribute("id", "remove-btn");

        // Create an image element for the delete icon inside the button
        const deleteIcon = document.createElement("img");

        let path = "../images/delete.png";
        deleteIcon.setAttribute("src", path);

        deleteIcon.setAttribute("id", "remove-icon");



        // Append the delete icon to the delete button
        deleteBtn.appendChild(deleteIcon);

        // Append the delete button to the button cell
        deleteBtnCell.appendChild(deleteBtn);

        // Append the individual cells (title, author, pages, status, button) to the row
        row.appendChild(titleCell);
        row.appendChild(authorCell);
        row.appendChild(pagesCell);
        row.appendChild(statusCell);
        row.appendChild(deleteBtnCell);

        // Append the newly created row to the table body, making it part of the visible table
        tableBody.appendChild(row);

        // removeBookFromLibrary(deleteBtn, row);
    });


    clearInputs();

}// displayLibrary()

//=======================================================================================================

/**
 * Removes the specified row from the library 
 * @param {HTMLElement} button 
 * @param {HTMLElement} row 
 */
function removeBookFromLibrary(button, row) {
    button.addEventListener("click", () => {
        row.remove();

        console.log(library);
    });
}// removeBookFromLibrary()

//=======================================================================================================
