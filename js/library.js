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

		this.#bookID = 0;

	} // constructor()


	//========================================================================================================

	addBook(book) {

		const isBook =
			book instanceof Book;

		if (!isBook) {

			const error =
				"The argument must be a book.";

			throw new TypeError(error);

		} // if

		book.id =
			this.#bookID;

		this.#library.push(book);

		this.#bookID++;

	} // addBook()


	//========================================================================================================

	displayBooks() {

		const body =
			document.querySelector
				("body");

		let tableContainer =
			document.querySelector
				("#table-container");

		const doesTableExist =
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

			this.#clearTable
				(tableContainer);

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

			changeStatusBtn.setAttribute
				(
					"id",
					"change-status-btn"
				);

			changeStatusBtn.textContent =
				"Change Read Status";


			btnsContainer.appendChild
				(section);

			section.appendChild
				(changeStatusBtn);

			this.toggleBookStatus
				(
					changeStatusBtn,
					statusCell,
					book.read
				);

		}); // forEach

	} // displayBooks()

	//========================================================================================================

	appendRowButtons(book, btnsContainer) {

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


		btnsContainer.appendChild
			(section);

		section.appendChild
			(changeStatusBtn);

		const statusCell =
			document.querySelector
				("#book-status");

		this.toggleBookStatus
			(
				changeStatusBtn,
				statusCell,
				book.read

			);

	} // appendRowButtons()

	//========================================================================================================

	#appendTableData(book, tableBody) {

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

		const changeStatusBtn =
			document.querySelector
				("#read-status");


	} // appendTableData()z

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

	#clearTable(tableContainer) {

		tableContainer.innerHTML = "";

	} // clearTable()

	//=========================================================================================================

	removeBook(book) {

		const isBook =
			book instanceof Book;

		if (!isBook) {

			const error =
				"The argument must be a book.";

			throw new TypeError(error);

		} // if

		const index =
			this.#library.indexOf
				(book);

		const isBookFound =
			(index != -1);

		if (!isBookFound) {

			const bookTitle =
				book.title;

			const error =
				`Could not find the book "${bookTitle}."`;

			throw new Error(error);

		} // if

		else {

			this.#library.splice
				(index, 1);

			this.#bookID--;

		} // else

	} // removeBook()


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

try {


	const library =
		new Library();

	const book1 =
		new Book
			(
				library.bookID,
				"The Great Gatsby",
				"F. Scott Fitzgerald",
				180,
				true
			);

	const book2 =
		new Book
			(
				library.bookID,
				"One Hundred Years of Solitude",
				"Gabriel García Márquez",
				417,
				false
			);

	const book3 =
		new Book
			(
				library.bookID,
				"Don Quixote",
				"Miguel de Cervantes",
				1_072,
				true
			);

	const book4 =
		new Book
			(
				library.bookID,
				"Pride and Prejudice",
				"Jane Austen",
				400,
				true
			);

	library.addBook(book1);

	library.addBook(book2);

	const book5 =
		new Book
			(
				Library.bookID,
				"To Kill a Mockingbird",
				"Harper Lee",
				384,
				false
			);

	library.addBook(book3);

	library.addBook(book4);

	library.addBook(book5);

	const book6 =
		new Book
			(
				library.bookID,
				"The Divine Comedy",
				"Dante Alighieri",
				928,
				true
			);

	library.addBook(book6);

	library.displayBooks();

} // try

catch (ex) {

	console.error
		(ex.message);

} // catch


//===========================================================================================================
