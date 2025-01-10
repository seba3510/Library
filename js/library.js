/**
 * This script implements the library to store all the books
 * once the form is validated.
 * 
 * @author Sebastian Corporan Berrios
 */


/**
 * Array of objects used to store each book
 * 
 * @type {Book}
 */
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
        // const statusCell = document.createElement("td");
        statusCell.textContent = book.read;

        // Create a new cell for the delete button
        const deleteBtnCell = document.createElement("td");

        // Create the delete button element
        const deleteBtn = document.createElement("button");

        deleteBtn.setAttribute("class", "remove-btn");
        deleteBtn.setAttribute("data-bookId", `${book.id}`);



        // Create an image element for the delete icon inside the button
        const deleteIcon = document.createElement("img");

        let path = "../images/delete.png";
        deleteIcon.setAttribute("src", path);

        deleteIcon.setAttribute("class", "remove-icon");


        // Append the delete icon to the delete button
        deleteBtn.appendChild(deleteIcon);

        // Append the delete button to the button cell
        deleteBtnCell.appendChild(deleteBtn);

        // Crate the cell in which the button to change the read status will be displayed
        const changeStatusBtnCell = document.createElement("td");


        // Crete the button that is used to toggle the read status of the book
        const changeStatusBtn = document.createElement("button");
        changeStatusBtn.setAttribute("data-bookId", `${book.id}`);
        changeStatusBtn.textContent = "Change Status";

        // Append the button that changes the status inside of its respective cell
        changeStatusBtnCell.appendChild(changeStatusBtn);

        // Append the individual cells (title, author, pages, status, delete button) to  the row
        row.appendChild(bookIdCell);
        row.appendChild(titleCell);
        row.appendChild(authorCell);
        row.appendChild(pagesCell);
        row.appendChild(statusCell);
        row.appendChild(deleteBtnCell);
        row.appendChild(changeStatusBtnCell);

        // Append the newly created row to the table body, making it part of the visible table
        tableBody.appendChild(row);

        removeBookFromLibrary(deleteBtn, row);
        toggleBookStatus(changeStatusBtn, statusCell, book.read);
    });

    clearInputs();

}// displayLibrary()


//=======================================================================================================

/**
 * Removes the specified row from the library 
 * 
 * @param {HTMLElement} button - The button that performs the action of deleting the book from the library
 * @param {HTMLElement} row  - The row in the display of the library that contains  the book to be removed
 */
function removeBookFromLibrary(button, row) {
    button.addEventListener("click", () => {
        row.remove(); // remove the book from the display
        delete library[Number(button.getAttribute("data-bookId"))]; // remove the book from the 'library' array
        return;
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

/**
 * Toggles the display status of the book
 * 
 * @param {@HTMLElement} button - The button that triggers the event to change the status
 * @param {@HTMLElement} cell - The cell in which the status will be displayed
 * @param {Boolean} status - The value of the book's read status
 */
function toggleBookStatus(button, cell, status) {

    button.addEventListener("click", (event) => {

        switch ((status)) {
            case true:
                status = false;
                break;
            case false:
                status = true;
                break;
            default:
                break;
        }// switch()

        library[Number((button.getAttribute("data-bookId")))].read = status

        cell.textContent = status;
    });
}// toggleBookStatus()