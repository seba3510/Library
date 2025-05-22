class Form {

	#form;

	bookTitle;

	#bookAuthor;

	#bookPages;

	#bookStatus;

	//================================================================================

	get form() {

		return this.form;

	} // getForm()

	//======================================================================

	set form(value) {

		this.#form =
			value;

	} // setForm()

	//======================================================================

	get bookAuthor() {

		return this.#bookAuthor;

	} // getBookAuthor()

	//======================================================================

	set bookAuthor(value) {

		this.#bookAuthor =
			value;

	} // setBookAuthor()

	//======================================================================


	get bookPages() {

		return this.#bookPages;

	} // getBookPages()

	//======================================================================

	set bookPages(value) {

		this.#bookPages =
			value;

	} // setBookPages()

	//======================================================================


	get bookStatus() {

		return this.#bookStatus;

	} // getBookStatus()

	//======================================================================

	set bookStatus(value) {

		this.#bookStatus =
			value;

	} // setBookStatus()

	//======================================================================

	constructor() {

		// this.form =
		// 	document.querySelector
		// 		("form");

		// this.bookTitle =
		// 	document.querySelector
		// 		("#book-title").value;

		// this.bookAuthor =
		// 	document.querySelector
		// 		("#book-author").value;



	} // constructor()

	//======================================================================


	submitForm() {

		this.#displayForm();

		this.#closeForm();

	} // submitForm()

	//======================================================================

	#displayForm() {

		const button =
			document.querySelector("#open-modal");

		const dialogBox =
			document.querySelector("#dialog-box");

		button.addEventListener("click", () => {

			dialogBox.showModal();

		}); // addEventListener

	} // displayForm()

	//======================================================================

	#closeForm() {

		const dialogBox =
			document.querySelector
				("#dialog-box");

		dialogBox.close();

	} // closeForm()

	//======================================================================


} // class

const formValidator =
	new Form();


formValidator.submitForm();