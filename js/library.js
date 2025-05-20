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

		this.bookID = 0;

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

			this.#appendTableData
				(book, tableBody);

			this.appendRowButtons
				(
					book,
					btnsContainer
				);

		}); // forEach

	} // displayBooks()

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

		changeStatusBtn.textContent =
			"Change Read Status";

		btnsContainer.appendChild
			(section);

		section.appendChild
			(changeStatusBtn);

	} // appendRowButtons()


	//========================================================================================================


	#appendTableData(book, tableBody) {

		const contentRow =
			document.createElement("tr");

		const bookIDCell =
			document.createElement("td");

		bookIDCell.textContent =
			`${book.id}`;

		// bookIDCell.style.visibility =
		// 	"hidden"

		contentRow.appendChild
			(bookIDCell);

		const titleCell =
			document.createElement("td");

		titleCell.textContent =
			book.title;

		contentRow.appendChild
			(titleCell);

		const authorCell =
			document.createElement("td");

		// authorCell.style.textAlign =
		// 	"left";
		authorCell.textContent =
			book.author;

		contentRow.appendChild
			(authorCell);

		const pagesCell =
			document.createElement("td");

		// pagesCell.style.textAlign =
		// 	"right";

		pagesCell.textContent =
			`${book.pages}`;

		contentRow.appendChild
			(pagesCell);

		const statusCell =
			document.createElement("td");

		// statusCell.style.textAlign =
		// 	"left";

		statusCell.textContent =
			book.read;

		statusCell.textContent =
			(book.read === true)
				? "Yes" : "No";

		contentRow.appendChild
			(statusCell);

		tableBody.appendChild
			(contentRow);

	} // appendTableData()


	//========================================================================================================

	#appendTableHeader(tableHeader) {

		const headerRow =
			document.createElement("tr");

		const bookIDHeaderCell =
			document.createElement("th");

		bookIDHeaderCell.textContent =
			"ID";

		headerRow.appendChild(bookIDHeaderCell);

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
			document.createElement("th");

		pagesHeaderCell.textContent =
			"Number of Pages";

		headerRow.appendChild
			(pagesHeaderCell);

		const statusHeaderCell =
			document.createElement("th");

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

	toggleBookStatus(book) {

		const isBook =
			book instanceof Book;

		if (!isBook) {

			const error =
				"The argument must be a book.";

			throw new TypeError(error);

		} // if

		book.read =
			book.read === true ?
				false : true;

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
				"Book #1",
				"Author #1",
				50,
				true
			);

	const book2 =
		new Book
			(
				library.bookID,
				"Book #2",
				"Author #2",
				100,
				false
			);

	const book3 =
		new Book
			(
				library.bookID,
				"Book #3",
				"Author #3",
				500,
				true
			);

	const book4 =
		new Book
			(
				library.bookID,
				"Book #4",
				"Author #4",
				123,
				true
			);

	library.addBook(book1);

	library.addBook(book2);

	const book5 =
		new Book
			(
				Library.bookID,
				"Book #5",
				"Author #5",
				5,
				false
			);

	library.addBook(book3);

	library.addBook(book4);

	library.addBook(book5);

	const book6 =
		new Book
			(
				Library.bookID,
				"Book #6",
				"Author #6",
				456,
				true
			);

	library.addBook(book6);

	library.displayBooks();

} // try

catch (ex) {

	const isTypeError =
		ex instanceof TypeError;

	if (isTypeError) {

		const error =
			ex.message;

		console.error(error);

	} // if

	const isRangeError =
		ex instanceof RangeError;

	if (isRangeError) {

		const error =
			ex.message;

		console.error(error);

	} // if

	const isGeneralError =
		ex instanceof Error;

	if (isGeneralError) {

		const error =
			ex.message;

		console.error(error);

	} // if

} // catch


//===========================================================================================================
