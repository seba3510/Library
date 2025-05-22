class Book {

	#id;
	#title;
	#author;
	#pages;
	#read;


	//=========================================================================================================

	get id() {

		return this.#id;

	} // getId()

	//========================================================================================================

	set id(value) {

		const isInt =
			Number.isInteger
				(value);

		if (!isInt) {

			const error =
				"The book ID must be an integer.";

			throw new TypeError(error);

		} // if

		this.#id =
			value;

	} // setId()

	//=========================================================================================================

	get title() {

		return this.#title;

	} // getTitle()

	//=========================================================================================================

	set title(value) {

		const isString =
			typeof value === "string";

		if (!isString) {

			const error =
				"The title must be a string.";

			throw new TypeError(error);

		} // if

		this.#title =
			value;

	} // setTitle()


	//=========================================================================================================

	get author() {

		return this.#author;

	} // getAuthor()


	//=========================================================================================================

	set author(value) {

		this.#author =
			value;

	} // setAuthor()


	//=========================================================================================================

	get pages() {

		return this.#pages;

	} // getPages()


	//=========================================================================================================

	set pages(value) {

		const isInteger =
			Number.isInteger
				(value);

		const areNumPagesValid =
			value > 0;

		let error = "";

		if (!isInteger) {

			error =
				"The number of pages must " +
				"be an integer.";

			throw new TypeError(error);

		} // if

		if (!areNumPagesValid) {

			error =
				"The number of pages must be " +
				"greater than 0.";

			throw new RangeError(error);

		} //  if

		this.#pages =
			value;

	} // setPages()


	//=========================================================================================================

	get read() {

		return this.#read;

	} // getRead()


	//=========================================================================================================

	set read(value) {

		const isBoolean =
			typeof value === "boolean";

		if (!isBoolean) {

			const error =
				"The read status must be a boolean.";

			throw new TypeError(error);

		} // if

		else {

			this.#read =
				value;

		} // else

	} // setRead()

	//=========================================================================================================


	constructor
		(
			id,
			title,
			author,
			pages,
			read
		) {

		this.#id =
			id;

		this.title =
			title;

		this.author =
			author;

		this.pages =
			pages;

		this.read =
			read;

	} // constructor()

	//=========================================================================================================

} // class

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

//===========================================================================================================

class Form {

	#library =
		new Library();

	constructor() {

	} // constructor()

	//======================================================================


	#displayForm() {

		// this.#clearData();

		const button =
			document.querySelector
				("#open-modal");

		const dialogBox =
			document.querySelector
				("#dialog-box");

		const haveRead =
			document.querySelector
				("#have-read");

		haveRead.checked =
			false;

		button.addEventListener("click", () => {

			dialogBox.showModal();


		}); // addEventListener()

	} // displayForm()

	//======================================================================

	#closeForm() {

		const dialogBox =
			document.querySelector
				("#dialog-box");

		const button =
			document.querySelector
				("#close-modal");

		button.addEventListener("click", (event) => {

			event.preventDefault();

			dialogBox.close();

		}); // addEventListener


	} // closeForm()

	//======================================================================


	//======================================================================

	clearData() {

		const title =
			document.querySelector
				("#book-title");

		const author =
			document.querySelector
				("#book-author");

		const pages =
			document.querySelector
				("#num-pages");

		const haveRead =
			document.querySelector
				("#haveRead");

		const haveNotRead =
			document.querySelector
				("#not-read");

		title.value = "";

		author.value = "";

		pages.value = "";

		haveNotRead.checked = false;

		haveRead.checked = false;

	} // clearData()

	//======================================================================

	#submitForm() {

		const form =
			document.querySelector
				("form");

		form.addEventListener("submit", (event) => {

			event.preventDefault();

			const title =
				document.querySelector
					("#book-title").value

			const author =
				document.querySelector
					("#book-author").value;

			const pages =
				Number
					(
						document.querySelector
							("#num-pages").value
					);

			const haveRead =
				document.querySelector
					("#have-read");

			const hasBookBeenRead =
				haveRead.checked;

			const haveNotRead =
				document.querySelector
					("#not-read").checked;

			const readStatus =
				(hasBookBeenRead === true)
					? true : false;

			this.#library.addBook
				(
					this.#library.bookID,
					title,
					author,
					pages,
					readStatus
				);

			this.#library.displayBooks();

			this.clearData();

		}); // addEventListener

	} // submitForm()

	//======================================================================

	addNewBook() {

		this.#displayForm();

		this.#closeForm();

		this.#submitForm();

	} // addNewBook()

	//======================================================================


} // class

//======================================================================


const form =
	new Form();

form.addNewBook();

//======================================================================
