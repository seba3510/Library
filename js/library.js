



const library = [];

//=======================================================================================================


function Book(id, title, author, pages, read) {
	this.id = id;
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}// Book()


//=======================================================================================================

function addBookToLibrary(id, title, author, pages, read) {
	let newBook = new Book(id, title, author, pages, read);
	library.push(newBook);
	bookId++;
}// addBookToLibrary()

//=======================================================================================================



function displayLibrary() {

	const body = document.querySelector("body");


	const tableContainer = document.createElement("div");
	tableContainer.setAttribute("id", "table-container");
	body.appendChild(tableContainer);

	const table = document.createElement("table");
	const tableHeader = document.createElement("thead");
	const tableBody = document.createElement("tbody");


	// console.log(body);

	table.appendChild(tableHeader);
	table.appendChild(tableBody);
	tableContainer.appendChild(table);




	table.style.visibility = "visible"

	library.forEach((book => {


		const headerRow = document.createElement("tr");



		const bookIDHeaderCell = document.createElement("th");
		bookIDHeaderCell.textContent = "ID";
		headerRow.appendChild(bookIDHeaderCell);

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


		const contentRow = document.createElement("tr");

		const bookIDCell = document.createElement("td");
		bookIDCell.textContent = `${book.id}`;

		const titleCell = document.createElement("td");
		titleCell.textContent = book.title;

		const authorCell = document.createElement("td");
		authorCell.textContent = book.author;

		const pagesCell = document.createElement("td");
		pagesCell.textContent = `${book.pages}`;

		const statusCell = document.createElement("td");
		statusCell.textContent = book.read;

		const div = document.createElement("div");
		div.setAttribute("id", "edit-btns-container");

		const deleteBtn = document.createElement("button");
		deleteBtn.setAttribute("class", "remove-btn");
		deleteBtn.setAttribute("data-bookId", `${book.id}`);

		const deleteIcon = document.createElement("img");

		let path = "../images/delete.png";
		deleteIcon.setAttribute("src", path);

		deleteIcon.setAttribute("class", "remove-icon");

		deleteBtn.appendChild(deleteIcon);
		div.appendChild(deleteBtn);


		const changeStatusBtn = document.createElement("button");
		changeStatusBtn.setAttribute("data-bookId", `${book.id}`);
		changeStatusBtn.textContent = "Change Status";
		div.appendChild(changeStatusBtn);




		tableHeader.appendChild(headerRow);


		contentRow.appendChild(bookIDCell);
		contentRow.appendChild(titleCell);
		contentRow.appendChild(authorCell);
		contentRow.appendChild(pagesCell);
		contentRow.appendChild(statusCell);



		tableBody.appendChild(contentRow);



		removeBookFromLibrary(deleteBtn, contentRow);
		toggleBookStatus(changeStatusBtn, statusCell, book.read);
	}));

	clearInputs();

}// displayLibrary()


//=======================================================================================================

function removeBookFromLibrary(button, row) {
	button.addEventListener("click", () => {
		row.remove(); // remove the book from the display
		delete library[Number(button.getAttribute("data-bookId"))]; // remove the book from the 'library' array
	});
}// removeBookFromLibrary()

//=======================================================================================================

function clearTable() {
	const tableBody = document.querySelector("tbody");
	tableBody.innerHTML = "";
}// clearTable()

//=======================================================================================================

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