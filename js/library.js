let bookID =
	0;
class Book {

	#id;
	#title;
	#author;
	#pages;
	#read;

	//==============================================================



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

		}

		else {

			this.#read =
				value;

		} // if

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
			bookID

		bookID++;

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

//==============================================================

// try {

// 	const hungerGames =
// 		new Book
// 			(
// 				"The Hunger Games",
// 				"Suzanne Collins",
// 				150,
// 				true
// 			);

// 	const harryPotter =
// 		new Book
// 			(
// 				"To Kill a Mocking Bird",
// 				"Charles Dickens",
// 				384,
// 				false
// 			);

// 	const donQuixote =
// 		new Book
// 			(
// 				"Don Quixote",
// 				"Miguel de Cervantes",
// 				1_072,
// 				false
// 			);

// 	const library =
// 		[
// 			{
// 				"Title": hungerGames.title,
// 				"Author": hungerGames.author,
// 				"Number of Pages": hungerGames.pages,
// 				"Has the Book been Read?": hungerGames.read
// 			},
// 			{
// 				"Title": harryPotter.title,
// 				"Author": harryPotter.author,
// 				"Number of Pages": harryPotter.pages,
// 				"Has the Book been Read?": harryPotter.read
// 			},
// 			{
// 				"Title": donQuixote.title,
// 				"Author": donQuixote.author,
// 				"Number of Pages": donQuixote.pages,
// 				"Has the Book been Read?": donQuixote.read
// 			}
// 		];

// 	console.log("Before adding new books...");

// 	console.table(library);

// }  // try

// catch (ex) {

// 	const isTypeError =
// 		ex instanceof TypeError;

// 	if (isTypeError) {

// 		const error =
// 			ex.message;

// 		console.error(error);

// 	} // if

// 	const isRangeError =
// 		ex instanceof RangeError;

// 	if (isRangeError) {


// 		const error =
// 			ex.message;

// 		console.error(error);

// 	} // if

// } // catch

//==============================================================
class Library {


	#library;

	//==============================================================


	get library() {

		return this.#library;

	} // getLibrary()

	//==============================================================

	constructor() {

		this.#library = [];

	} // constructor()

	//==============================================================

	addBook(book) {

		this.#library.push(book);


	} // addBook()

} // class

const hungerGames =
	new Book
		(
			bookID,
			"The  Hunger Games",
			"Suzanne Collins",
			255,
			true
		);

const harryPotter =
	new Book
		(
			bookID,
			"Harry Potter",
			"J.K. Rowling",
			300,
			true
		);

const library =
	new Library().library;



library.push(hungerGames);

library.push(harryPotter);

console.log(library);