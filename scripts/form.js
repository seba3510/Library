import {
	Library
} from "./library.js";

//=====================================================================

class Form {

	#form;

	#cancelBtn;

	#dialogBox;

	#library;

	//=====================================================================

	constructor() {

		this.#form =
			document.querySelector(
				"form"
			);

		this.#cancelBtn =
			document.querySelector(
				"#close-btn"
			);

		this.#dialogBox =
			document.querySelector(
				"dialog"
			);

		this.#library =
			new Library();

	} // constructor()

	//=====================================================================

	displayForm() {

		const selector =
			"#book-img";

		const image =
			document.querySelector(
				selector
			);

		image.addEventListener("click", () => {

			this.#dialogBox.show();

			this.#submitForm();

			this.#closeForm();

		}); // addEventListener()

	} // displayForm()

	//=====================================================================

	#submitForm() {

		this.#form.addEventListener("submit", (event) => {

			event.preventDefault();

			const title =
				this.#form[0]
					.value
					.trim();

			const author =
				this.#form[1]
					.value
					.trim();

			const pagesInput =
				this.#form[2]
					.value;

			const pages =
				parseInt(
					pagesInput
				);

			const read =
				document.querySelector(
					"#read"
				);

			const hasBookBeenRead =
				read.checked;

			const bookID =
				self
					.crypto
					.randomUUID();

			this.#library.addBook(
				bookID,
				title,
				author,
				pages,
				hasBookBeenRead
			);

			this.#library.displayBooks();

			// Clear data of form
			this.#form
				.reset();

		}); // addEventListener()

	} // submitForm()

	//=====================================================================

	#closeForm() {

		this.#cancelBtn.addEventListener("click", () => {

			this.#dialogBox.close();

		}); // addEventListener()

	} // closeForm()

	//=====================================================================

} // class

//=====================================================================

const form =
	new Form();

form.displayForm();

