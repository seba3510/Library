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



//=======================================================================================================

/**
 * Creates a new Book object 
 * 
 * @param {Number} id - The id assigned to the book
 * @param {String} title - The title of the book 
 * @param {String} author - The author of the book
 * @param {Number} pages - The total number of pages that the book has
 * @param {Boolean} read - Status that indicates whether the book has been read, or not
 */
function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}// Book()


//=======================================================================================================

/**
 * Adds the specified book to the library
 * 
 * @param {Number} id - The id of the book
 * @param {String} title - The title of the book    
 * @param {String} author - The author of the book
 * @param {Number} pages - The total number of pages that the book has
 * @param {Boolean} read - Status that indicates if the book has been read, or not
 */
function addBookToLibrary(id, title, author, pages, read) {
    let newBook = new Book(id, title, author, pages, read);
    library.push(newBook);
    bookId++;
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

        // Create a new row element  for each book
        const row = document.createElement("tr");

        // Create a  cell for the id of the book, and set its text content to the id of book
        const bookIdCell = document.createElement("td");
        bookIdCell.textContent = `${book.id}`;


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

        deleteBtn.setAttribute("class", "remove-btn");
        deleteBtn.setAttribute("id", `${book.id}`);

        // Create an image element for the delete icon inside the button
        const deleteIcon = document.createElement("img");

        let path = "../images/delete.png";
        deleteIcon.setAttribute("src", path);

        deleteIcon.setAttribute("class", "remove-icon");


        // Append the delete icon to the delete button
        deleteBtn.appendChild(deleteIcon);

        // Append the delete button to the button cell
        deleteBtnCell.appendChild(deleteBtn);

        // Create a cell for the button that toggles read status of the book
        const changeStatusBtnCell = document.createElement("td");

        // Create the button that changes the read status
        const changeStatusBtn = document.createElement("button");
        let msg = "Change read status";

        changeStatusBtn.innerText = msg;

        changeStatusBtn.setAttribute("id", `${book.id}`)


        // Append the status button to it's cell
        changeStatusBtnCell.appendChild(changeStatusBtn);


        // Append the individual cells (title, author, pages, status, button) to the row
        row.appendChild(bookIdCell);
        row.appendChild(titleCell);
        row.appendChild(authorCell);
        row.appendChild(pagesCell);
        row.appendChild(statusCell);
        row.appendChild(deleteBtnCell);

        // Append the newly created row to the table body, making it part of the visible table
        tableBody.appendChild(row);

        // clearInputs();

        removeBookFromLibrary(deleteBtn, row);
    });


    clearInputs();

}// displayLibrary()

//=======================================================================================================

/**
 * Removes the specified book from the library 
 * 
 * @param {HTMLElement} button - The button that performs the action of deleting the book from the library
 * @param {HTMLElement} row  - The row in the display of the library that contains  the book to be removed
 */
function removeBookFromLibrary(button, row) {
    button.addEventListener("click", () => {
        row.remove(); // remove the book from the display
        delete library[Number(button.id)]; // remove the book from the 'library' array
    });
}// removeBookFromLibrary()

//=======================================================================================================

/**
 * Clears the contents of the table. 
 * 
 * @Note - This function was added to fix an issue where 
 * every time a new book (except the first one) was added, {@link displayLibrary()}
 * would display both the already added books and the new one.
 */
function clearTable() {
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = "";
}// clearTable()

//=======================================================================================================

function toggleBookStatus(button, cell) {
}// toggleBookStatus()