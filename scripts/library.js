import {
	Book
} from "./book.js";

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

		this.#library
			.push(book);

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
			(tableContainer
				!== null);

		if (!doesTableExist) {

			tableContainer =
				document.createElement(
					"div"
				);

			tableContainer.setAttribute(
				"id",
				"table-container"
			);

			body.appendChild(
				tableContainer
			);

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

			const formattedPages =
				book.pages
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

			const deleteBookCell =
				document.createElement(
					"td"
				);

			// const btnsCell =
			// 	document.createElement(
			// 		"td"
			// 	);

			// btnsCell.setAttribute(
			// 	"class",
			// 	"edit-btns"
			// );

			contentRow.appendChild(
				deleteBookCell
			);

			// contentRow.appendChild(
			// 	btnsCell
			// );

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
				"data-bookID",
				`${id}`
			);

			const deleteIcon =
				document.createElement(
					"img"
				);

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

			deleteBookCell.appendChild(
				deleteBtn
			);

			const changeStatusCell =
				document.createElement(
					"td"
				);

			const changeStatusBtn =
				document.createElement(
					"button"
				);

			changeStatusBtn.setAttribute(
				"data-bookID",
				`${id}`
			);

			id++;

			changeStatusBtn.setAttribute(
				"class",
				"change-status-btn"
			);

			changeStatusBtn.textContent =
				"Change Read Status";

			changeStatusCell.appendChild(
				changeStatusBtn
			);

			contentRow.appendChild(
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

	removeBook(
		button,
		row,
		section
	) {

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
			document.createElement(
				"tr"
			);

		const bookIDHeaderCell =
			document.createElement(
				"th"
			);

		bookIDHeaderCell.
			textContent = "ID";

		headerRow.appendChild
			(bookIDHeaderCell);

		const titleHeaderCell =
			document.createElement("th");

		titleHeaderCell.textContent =
			"Title";

		headerRow.appendChild(
			titleHeaderCell
		);

		const authorHeaderCell =
			document.createElement(
				"th"
			);

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
			document.querySelector(
				"#table-container"
			);

		tableContainer.innerHTML = "";

	} // clearTable()

	//=========================================================================================================

	toggleBookStatus(
		button,
		cell,
		status
	) {

		button.addEventListener("click", () => {

			status =
				(status) ? false
					: true;

			const bookID =
				button.getAttribute(
					"data-bookId"
				);

			const index =
				new Number(
					bookID
				);

			this.#library[index].read =
				status;

			cell.textContent =
				(status) ? "Yes"
					: "No";


		}); // addEventListener()

	} // toggleBookStatus()

	//========================================================================================================

} // class

//========================================================================================================

export { Library };