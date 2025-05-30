import { Book } from "./book.js";
class Library {

	#library;

	#bookID;

	//========================================================================================================

	get library() {

		return this.#library;

	} // getLibrary()

	//========================================================================================================

	set library(value) {

		this.#library =
			value;

	} // setLibrary()


	//========================================================================================================


	get bookID() {

		return this.#bookID;

	} // getBookID()


	//========================================================================================================

	set bookID(value) {

		this.#bookID =
			value;

	} // setBookID()


	//========================================================================================================

	constructor() {

		this.library = [];

		this.#bookID = 0;

	} // constructor()


	//========================================================================================================

	addBook(id, title, author, pages, read) {


		id =
			this.#bookID;

		const book =
			new Book
				(
					id,
					title,
					author,
					pages,
					read
				);

		this.#library.push(book);

		this.#bookID++;

		console.log(this.#library);


	} // addBook()

	//========================================================================================================

	displayBooks() {

		const body =
			document.querySelector
				("body");

		let tableContainer =
			document.querySelector
				("#table-container");

		let doesTableExist =
			(tableContainer != null);

		if (!doesTableExist) {

			tableContainer =
				document.createElement
					("section");

			tableContainer.setAttribute
				("id", "table-container");

			body.appendChild
				(tableContainer);

		} // if

		else {

			this.#clearTable();

		} // else

		const table =
			document.createElement
				("table");

		const tableHeader =
			document.createElement
				("thead");

		const tableBody =
			document.createElement
				("tbody");

		table.appendChild
			(tableHeader);

		table.appendChild
			(tableBody);

		tableContainer.appendChild
			(table);

		table.style.visibility =
			"visible";

		this.#appendTableHeader
			(tableHeader);

		const btnsContainer =
			document.createElement
				("section");

		btnsContainer.setAttribute
			("class", "btns-container");

		tableContainer.appendChild
			(btnsContainer);

		this.#library.forEach((book) => {

			const contentRow =
				document.createElement("tr");

			const bookIDCell =
				document.createElement("td");

			bookIDCell.textContent =
				`${book.id}`;

			bookIDCell.style.textAlign =
				"center";

			// bookIDCell.style.visibility =
			// 	"hidden"

			contentRow.appendChild
				(bookIDCell);

			const titleCell =
				document.createElement("td");

			titleCell.textContent =
				book.title;

			titleCell.style.textAlign =
				"left";

			contentRow.appendChild
				(titleCell);

			const authorCell =
				document.createElement("td");

			authorCell.style.textAlign =
				"left";
			authorCell.textContent =
				book.author;

			contentRow.appendChild
				(authorCell);

			const pagesCell =
				document.createElement("td");

			pagesCell.style.textAlign =
				"right";

			const formattedPages =
				book.pages.toLocaleString();

			pagesCell.textContent =
				`${formattedPages}`;

			contentRow.appendChild
				(pagesCell);

			const statusCell =
				document.createElement("td");

			statusCell.setAttribute
				(
					"id",
					"read-status"
				);

			statusCell.style.textAlign =
				"center";

			statusCell.textContent =
				book.read;

			statusCell.textContent =
				(book.read === true)
					? "Yes" : "No";

			contentRow.appendChild
				(statusCell);

			tableBody.appendChild
				(contentRow);


			const section =
				document.createElement
					("section");

			section.setAttribute
				(
					"id",
					"edit-btns-container"
				);

			const deleteBtn =
				document.createElement("button");

			deleteBtn.setAttribute
				(
					"class",
					"remove-btn"
				);

			deleteBtn.setAttribute
				(
					"data-bookID",
					`${book.id}`
				);

			const deleteIcon =
				document.createElement("img");

			const path =
				"../assets/images/delete.png";

			deleteIcon.setAttribute
				(
					"src",
					path
				);

			deleteIcon.setAttribute
				(
					"class",
					"remove-icon"
				);

			deleteBtn.appendChild
				(deleteIcon);

			section.appendChild
				(deleteBtn);

			const changeStatusBtn =
				document.createElement("button");

			changeStatusBtn.setAttribute
				(
					"data-bookID",
					`${book.id}`
				);

			changeStatusBtn.setAttribute
				(
					"id",
					"change-status-btn"
				);

			changeStatusBtn.textContent =
				"Change Read Status";

			section.appendChild
				(changeStatusBtn);

			btnsContainer.appendChild
				(section);


			this.removeBook
				(
					deleteBtn,
					contentRow,
					section
				);

			this.toggleBookStatus
				(
					changeStatusBtn,
					statusCell,
					book.read
				);

		}); // forEach


	} // displayBooks()

	//========================================================================================================

	removeBook(button, row, section) {

		button.addEventListener("click", () => {


			console.log("Before Removal...");
			console.log(this.#library)

			row.remove();
			section.remove();

			const bookID =
				button.getAttribute
					("data-bookID");

			const index =
				Number
					(bookID);

			this.#library =
				this.#library.filter((book) => {

					const elem =
						this.#library[index];

					return (book != elem);

				}); // filter()

			console.log("After Removal...");
			console.log(this.#library);

			this.bookID--;



		}); // forEach


	} // removeBook()

	//========================================================================================================

	#appendTableHeader(tableHeader) {

		const headerRow =
			document.createElement("tr");

		const bookIDHeaderCell =
			document.createElement("th");

		bookIDHeaderCell.textContent =
			"ID";

		headerRow.appendChild
			(bookIDHeaderCell);

		const titleHeaderCell =
			document.createElement("th");

		titleHeaderCell.textContent =
			"Title";

		headerRow.appendChild
			(titleHeaderCell);

		const authorHeaderCell =
			document.createElement("th");

		authorHeaderCell.textContent =
			"Author";

		headerRow.appendChild
			(authorHeaderCell);

		const pagesHeaderCell =
			document.createElement
				("th");

		pagesHeaderCell.textContent =
			"Number of Pages";

		headerRow.appendChild
			(pagesHeaderCell);

		const statusHeaderCell =
			document.createElement
				("th");

		statusHeaderCell.textContent =
			"Has the Book Been Read?";

		headerRow.appendChild
			(statusHeaderCell);

		tableHeader.appendChild
			(headerRow);

	} // appendTableHeader()

	//========================================================================================================

	#clearTable() {

		const tableContainer =
			document.querySelector
				("#table-container");

		tableContainer.innerHTML = "";


	} // clearTable()

	//=========================================================================================================

	toggleBookStatus(button, cell, status) {

		button.addEventListener("click", () => {

			status =
				(status === true)
					? false : true;

			const bookID =
				button.getAttribute
					("data-bookID");

			const index =
				new Number
					(bookID);

			this.#library[index].read =
				status;

			cell.textContent =
				(status === true)
					? "Yes" : "No";

			console.log
				(
					`Read Status of "${this.library[index].title}":  ${status}."`
				);

		}); // forEach

	} // toggleBookStatus()


	//========================================================================================================


} // class

//========================================================================================================

const library =
	new Library();

export { library };