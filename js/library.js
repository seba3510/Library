


/**
 * Array that stores all the books 
 */
const library = [];

//=======================================================================================================

/**
 * Constructor that creates a new book
 * 
 * @param {Number} id - The id assigned to the book
 * @param {String} title - The name of the book
 * @param {String} author - Name of the author of the book
 * @param {Number} pages - The total number of pages that the book has
 * @param {Boolean} read - Status indicating if the book has been read
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
 * @param {Number} id - The id assigned to the book
 * @param {String} title - The name of the book
 * @param {String} author - Name of the author of the book
 * @param {Number} pages - The total number of pages that the book has
 * @param {Boolean} read - Status indicating if the book has been read
 */
function addBookToLibrary(id, title, author, pages, read) {
	let newBook = new Book(id, title, author, pages, read);
	library.push(newBook);
	bookId++;
}// addBookToLibrary()

//=======================================================================================================



/**
 * Creates and displays a table with the books that have been added to the library
 */
function displayLibrary() {

	const body = document.querySelector("body");

	let tableContainer = document.querySelector("#table-container");

	// Check if the div that serves as a container for the table exists
	if ((!doesElementExist(tableContainer))) {
		tableContainer = document.createElement("div");
		tableContainer.setAttribute("id", "table-container");
		body.appendChild(tableContainer);

	}// if

	else {

		clearTable();

	}// else

	const table = document.createElement("table");
	const tableHeader = document.createElement("thead");
	const tableBody = document.createElement("tbody");

	table.appendChild(tableHeader);
	table.appendChild(tableBody);

	tableContainer.appendChild(table);

	table.style.visibility = "visible";

	const headerRow = document.createElement("tr");

	// Append Header row to the table
	const bookIDHeaderCell = document.createElement("th");
	bookIDHeaderCell.textContent = "ID";
	// headerRow.appendChild(bookIDHeaderCell);
	bookIDHeaderCell.style.visibility = "hidden";

	const titleHeaderCell = document.createElement("th");
	titleHeaderCell.textContent = "Title";
	headerRow.appendChild(titleHeaderCell);

	const authorHeaderCell = document.createElement("th");
	authorHeaderCell.textContent = "Author";
	headerRow.appendChild(authorHeaderCell);

	const pagesHeaderCell = document.createElement("th");
	pagesHeaderCell.textContent = "Number of Pages";
	headerRow.appendChild(pagesHeaderCell);

	const statusHeaderCell = document.createElement("th");
	statusHeaderCell.textContent = "Has the book been read?";
	headerRow.appendChild(statusHeaderCell);

	tableHeader.appendChild(headerRow);

	const btnsContainer = document.createElement("div");
	btnsContainer.setAttribute("class", "btns-container");
	tableContainer.appendChild(btnsContainer);


	library.forEach((book => {

		const contentRow = document.createElement("tr");

		const bookIDCell = document.createElement("td");
		bookIDCell.textContent = `${book.id}`;
		// contentRow.appendChild(bookIDCell);
		bookIDCell.style.visibility = "hidden";

		const titleCell = document.createElement("td");
		titleCell.textContent = book.title;
		contentRow.appendChild(titleCell);

		const authorCell = document.createElement("td");
		authorCell.textContent = book.author;
		contentRow.appendChild(authorCell);

		const pagesCell = document.createElement("td");
		pagesCell.textContent = `${book.pages}`;
		contentRow.appendChild(pagesCell);

		const statusCell = document.createElement("td");
		statusCell.textContent = book.read;
		contentRow.appendChild(statusCell);

		tableBody.appendChild(contentRow);

		const div = document.createElement("div");
		div.setAttribute("id", "edit-btns-container");

		const deleteBtn = document.createElement("button");
		deleteBtn.setAttribute("class", "remove-btn");

		/**
		 * A data-attribute was assigned to this button to associate
		 * this DOM element with with the book object.  This data-attribute
		 * corresponds to the index of the library array
		 */
		deleteBtn.setAttribute("data-bookID", `${book.id}`);

		const deleteIcon = document.createElement("img");
		let path = "../images/delete.png";
		deleteIcon.setAttribute("src", path);
		deleteIcon.setAttribute("class", "remove-icon")

		deleteBtn.appendChild(deleteIcon);
		div.appendChild(deleteBtn);

		const changeStatusBtn = document.createElement("button");
		changeStatusBtn.setAttribute("data-bookID", `${book.id}`);
		changeStatusBtn.textContent = "Change Status";
		div.appendChild(changeStatusBtn);

		btnsContainer.appendChild(div);


		clearInputs();
		removeBookFromLibrary(deleteBtn, contentRow);
		toggleBookStatus(changeStatusBtn, statusCell, book.read);
	}));

}// displayLibrary()

//=======================================================================================================

/**
 * Removes a book from the library
 * 
 * @param {@HTMLElement} button - The button that triggers the action of deleting the book
 * @param {@HTMLElement} row - The row in which the button is at
 */
function removeBookFromLibrary(button, row) {

	button.addEventListener("click", () => {

		row.remove(); // remove the book from the display

		let index = Number(button.getAttribute("data-bookID"));
		delete library[index]; // remove the book from the 'library' array

		library.length--;
	});
}// removeBookFromLibrary()

//=======================================================================================================

/**
 * Clears the contents of the container that stores the table
 */
function clearTable() {
	const tableContainer = document.querySelector("#table-container");
	tableContainer.innerHTML = "";
}// clearTable()

//=======================================================================================================

/**
 * Changes the status of the book
 * 
 * @param {@HTMLElement} button - Reference to the button that triggers the action of changing the read status
 * @param {@HTMLElement} cell - Reference to the cell of the book in which the status wants to be changed
 * @param {@HTMLElement} status - The read status of the book
 */
function toggleBookStatus(button, cell, status) {

	button.addEventListener("click", (event) => {

		//Change the value of the book's read status
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

		/**
		 * Retrieve the index in which the book to change the status is at
		 */
		let index = Number(button.getAttribute("data-bookID"));
		library[index].read = status

		cell.textContent = status;
	});
}// toggleBookStatus();

//=======================================================================================================

/**
 * Determines if the specified element exists in the HTML page
 * @param {@HTMLElement} element 
 * @returns True if the element exists.  False if it does not exist
 */
function doesElementExist(element) {
	return ((element != null));
}// doesElementExist()