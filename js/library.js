class Book {

	#id;
	#title;
	#author;
	#pages;
	#read;

	//==============================================================

	get id() {

		return this.#id;

	} // getId()

	//==============================================================

	set id(value) {

		this.#id =
			value;

	} // setId()

	//==============================================================

	get title() {

		return this.#title;

	} // getTitle()

	//==============================================================

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

	//==============================================================

	get author() {

		return this.#author;

	} // getAuthor()

	//==============================================================

	set author(value) {

		this.#author =
			value;

	} // setAuthor()

	//==============================================================

	get pages() {

		return this.#pages;

	} // getPages()

	//==============================================================

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

	//==============================================================

	get read() {

		return this.#read;

	} // getRead()

	//==============================================================

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

	//==============================================================

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

	//==============================================================


} // class

//===================================================================

class Library {

	#library;

	#bookID;

	//==============================================================

	get library() {

		return this.#library;
	} // getLibrary()

	//=============================================================

	set library(value) {

		this.#library =
			value;

	} // setLibrary()

	//=============================================================

	get bookID() {

		return this.#bookID;

	} // getBookID()

	//=============================================================

	set bookID(value) {

		this.#bookID =
			value;

	} // setBookID()

	//=============================================================

	constructor() {

		this.library = [];

		this.bookID = 0;

	} // constructor()

	//==============================================================

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

	//==============================================================

	displayBooks() {

		/**
		 * TODO: Complete this method
		 *		when working on the
		 *		HTML/CSS part of the
		 * 		project.
		  */

	} // displayBooks()

} // class

//==================================================================

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

	library.addBook(book1);

	library.addBook(book2);

	library.addBook(book3);

	console.log(library.library);

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

} // catch

//==================================================================
