import { Book } from "./book.js";

//========================================================================================================
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


	} // constructor()

	//========================================================================================================

	addBook(
		id,
		title,
		author,
		pages,
		read) {

		this.#bookID = id;

		const book =
			new Book(
				id,
				title,
				author,
				pages,
				read
			);

		this.#library.push(book);

	} // addBook()

	//========================================================================================================

	displayBooks() {

		const body =
			document.querySelector(
				"body"
			);

		let tableContainer =
			document.querySelector(
				"#table-container"
			);

		const doesTableExist =
			(tableContainer !== null);

		if (!doesTableExist) {

			tableContainer =
				document.createElement(
					"section"
				);

			tableContainer.setAttribute(
				"id",
				"table-container"
			);

			body.appendChild
				(tableContainer);

		} // if

		else {

			this.#clearTable();

		} // else

		const table =
			document.createElement(
				"table"
			);

		const tableHeader =
			document.createElement(
				"thead"
			);

		const tableBody =
			document.createElement(
				"tbody"
			);

		table.appendChild(
			tableHeader
		);

		table.appendChild(
			tableBody
		);

		tableContainer.appendChild(
			table
		);

		table.style.visibility =
			"visible";

		this.#appendTableHeader(
			tableHeader
		);

		const btnsContainer =
			document.createElement(
				"div"
			);

		btnsContainer.setAttribute(
			"class",
			"btns-container"
		);

		tableContainer.appendChild(
			btnsContainer
		);

		let id = 0;

		this.#library.forEach((book) => {

			const contentRow =
				document.createElement(
					"tr"
				);

			const bookIDCell =
				document.createElement(
					"td"
				);

			bookIDCell.textContent =
				`${book.id}`;


			contentRow.appendChild(
				bookIDCell
			);

			const titleCell =
				document.createElement(
					"td"
				);

			titleCell.textContent =
				book.title;

			contentRow.appendChild(
				titleCell
			);

			const authorCell =
				document.createElement(
					"td"
				);

			authorCell.textContent =
				book.author;

			contentRow.appendChild(
				authorCell
			);

			const pagesCell =
				document.createElement(
					"td"
				);

			pagesCell
				.style
				.textAlign = "right";

			const formattedPages =
				book
					.pages
					.toLocaleString();

			pagesCell.textContent =
				`${formattedPages}`;

			contentRow.appendChild(
				pagesCell
			);

			const statusCell =
				document.createElement(
					"td"
				);

			statusCell.setAttribute(
				"class",
				"read-status"
			);
			statusCell.textContent =
				book.read;

			statusCell.textContent =
				(book.read)
					? "Yes"
					: "No";

			contentRow.appendChild(
				statusCell
			);

			tableBody.appendChild(
				contentRow
			);

			const btnsCell =
				document.createElement(
					"td"
				);

			btnsCell.setAttribute(
				"id",
				"edit-btns"
			);

			contentRow.appendChild(
				btnsCell
			);

			const deleteBtn =
				document.createElement(
					"button"
				);

			deleteBtn.setAttribute(
				"type",
				"button"
			);

			deleteBtn.setAttribute(
				"class",
				"remove-btn"
			);

			deleteBtn.setAttribute(
				"data-bookId",
				`${id}`
			);

			const deleteIcon =
				document.createElement("img");

			const path =
				"../assets/images/delete.png";

			deleteIcon.setAttribute(
				"src",
				path
			);

			deleteIcon.setAttribute(
				"class",
				"remove-icon"
			);

			deleteBtn.appendChild(
				deleteIcon
			);

			btnsCell.appendChild(
				deleteBtn
			);

			const changeStatusBtn =
				document.createElement(
					"button"
				);

			changeStatusBtn.setAttribute(
				"data-bookId",
				`${id}`
			);

			id++;

			changeStatusBtn.setAttribute(
				"id",
				"change-status-btn"
			);

			changeStatusBtn.textContent =
				"Change Read Status";

			btnsCell.appendChild(
				changeStatusBtn
			);

			this.removeBook(
				deleteBtn,
				contentRow,
				btnsCell
			);

			this.toggleBookStatus(
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
				button.getAttribute(
					"data-bookID"
				);

			const index =
				parseInt(
					bookID
				);

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

		headerRow.appendChild(
			authorHeaderCell
		);

		const pagesHeaderCell =
			document.createElement(
				"th"
			);

		pagesHeaderCell.textContent =
			"Number of Pages";

		headerRow.appendChild(
			pagesHeaderCell
		);

		const statusHeaderCell =
			document.createElement(
				"th"
			);

		statusHeaderCell.textContent =
			"Has the Book Been Read?";

		headerRow.appendChild(
			statusHeaderCell
		);

		const btnsHeaderCell =
			document.createElement(
				"th"
			);

		headerRow.appendChild(
			btnsHeaderCell
		);

		tableHeader.appendChild(
			headerRow
		);

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

		const bookID =
			button.getAttribute(
				"data-bookID"
			);

		console.log(bookID);


		button.addEventListener("click", () => {

			status =
				(status === true)
					? false : true;

			const bookID =
				button.getAttribute(
					"data-bookId"
				);

			console.log(bookID);


			const index =
				new Number
					(bookID);

			this.#library[index].read =
				status;

			cell.textContent =
				(status)
					? "Yes" : "No";

			console.log
				(
					`Read Status of "${this.library[index].title}": ${status}."`
				);

		}); // addEventListener()

	} // toggleBookStatus()

	//========================================================================================================

} // class

//========================================================================================================

const library =
	new Library();

//========================================================================================================

export { library };