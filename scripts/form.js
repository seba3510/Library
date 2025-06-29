import { library } from "./library.js";

//=====================================================================

class Form {

	#form;

	#submitBtn;

	#cancelBtn;

	#dialogBox;


	//=====================================================================

	constructor() {

		this.#form =
			document.querySelector(
				"form"
			);

		this.#submitBtn =
			document.querySelector(
				"#submit-btn"
			);

		this.#cancelBtn =
			document.querySelector(
				"#cancel-btn"
			);

		this.#dialogBox =
			document.querySelector(
				"dialog"
			);

	} // constructor()

	//=====================================================================

	displayForm() {

		const selector =
			"#add-book-btn";

		const button =
			document.querySelector(
				selector
			);

		button.addEventListener("click", () => {

			this.#dialogBox.show();

			this.#submitForm();

		}); // addEventListener()

	} // displayForm()

	//=====================================================================

	#submitForm() {


		this.#form.addEventListener("submit", (event) => {

			event.preventDefault();

			const title =
				document.querySelector(
					"#title"
				).value.trim();

			const author =
				document.querySelector(
					"#author"
				).value.trim();

			const pagesInput =
				document.querySelector(
					"#pages"
				).value;

			const pages =
				parseInt(
					pagesInput
				);

			const read =
				document.querySelector(
					"#read"
				);

			const hasBookBeenRead =
				(read.checked);

			const bookID =
				self
					.crypto
					.randomUUID();

			library.addBook(
				bookID,
				title,
				author,
				pages,
				hasBookBeenRead
			);

			const x = 10;

			// // library.displayBooks();

			// this.#clearData();

		}); // addEventListener()

	} // submitForm()

	//=====================================================================

	#clearData() {

		const title =
			document.querySelector(
				"#title"
			).value.trim();

		const author =
			document.querySelector(
				"#author"
			).value.trim();

		const pages =
			document.querySelector
				("#pages");

		const hasRead =
			document.querySelector(
				"#read"
			);

		const notRead =
			document.querySelector(
				"#not-read"
			);

		title.value = "";

		author.value = "";

		// hasRead.checked ? (!hasRead.checked)
		//     : (!notRead.checked)

	} // clearData()

	//=====================================================================

} // class

//=====================================================================

const form =
	new Form();

form.displayForm();