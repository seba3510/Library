import { library } from "./library.js";
class Form {

	constructor() {
	} // constructor()

	//======================================================================

	displayForm() {

		const button =
			document.querySelector("#open-modal");

		const dialogBox =
			document.querySelector("#dialog-box");

		button.addEventListener("click", () => {

			dialogBox.showModal();

		}); // addEventListener

		// this.#submitForm();

		this.#closeForm();

	} // displayForm()

	//======================================================================

	#closeForm() {

		const dialogBox =
			document.querySelector
				("#dialog-box");

		dialogBox.close();

	} // closeForm()

	//======================================================================

	submitForm() {


		try {

			if (this.#isDataValid()) {

				const title =
					document.querySelector
						("#book-title").value;

				const author =
					document.querySelector
						("#book-author").value;

				const pages =
					document.querySelector
						("#num-pages").value;

				const haveRead =
					document.querySelector
						("#haveRead");

				const readStatus =
					haveRead.checked ? true
						: false;

				book.title =
					title;

				book.author =
					author;

				book.pages =
					pages;

				book.read =
					readStatus;

				library.addBook(book);

			} // if

		}  // try

		catch (error) {

			alert(error.message);

		} // catch


	} // submitForm()

	//======================================================================

	#isDataValid() {

		//TODO: Complete this function

		return true;

	} // isDataValid()



} // class

const form =
	new Form();

// library.displayBooks();

form.displayForm();