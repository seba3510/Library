/**
 * This script validates the form in which the user enters a
 * book to store in the library.
 * 
 * @author Sebastian Corporan Berrios
 */


/**
 * Reference to the form in which the user will add a book to the library.
 * 
 * @type {HTMLElement}
 */
const form = document.querySelector("form");

/**
 * Reference to the input field that stores the title of the book.
 * 
 * @type {HTMLElement}
 */
const titleElem = document.querySelector("#book-title");

/**
 * Reference to the input field that stores the author of the book.
 * 
 * @type {HTMLElement}
 */
const authorElem = document.querySelector("#book-author");

/**
 * Reference to the input field that stores the number of pages that the book has.
 * 
 * @type {HTMLElement}
 */
const numPagesElem = document.querySelector("#num-pages");

/**
 * Reference to the input field that indicates whether the book has been read.
 * This element represents the user's selection confirming that the book has been read.
 * 
 * @type {HTMLElement}
 */
const haveRead = document.querySelector("#agree");

/**
 * Reference to the input field that indicates  that the book has not been been read.
 * This element represents the user's selection confirming the the book has not been read.
 */
const haveNotRead = document.querySelector("#disagree");

/**
 * Reference to the dialog element that displays the form.
 * 
 * @type {HTMLElement}
 */
const dialogElem = document.querySelector("#dialog");

/**
 * Assigns an id to each book.
 * This was done to facilitate the implementation of removing 
 * a book from the library, and toggling the book status.
 * 
 * This id starts from 0 to link via data-attribute the index of the book in the array
 * in which will be deleted.
 */
let bookId = Number(0);
//=======================================================================================================

/**
 * Displays the form when the user clicks wants to add a new book to the library.
 */
function displayForm() {

	// Select the button element with the ID "open-modal"
	const btn = document.querySelector("#open-modal");

	// Add an event listener to the button that listens for the "click" event
	btn.addEventListener("click", () => {
		// Show the modal dialog when the button is clicked
		dialogElem.showModal();
	});

} // displayForm()

//=======================================================================================================

/**
 * Closes the form.
 */
function closeForm() {

	const btn = document.querySelector("#close-modal");

	btn.addEventListener("click", () => {
		dialogElem.close();
	});
}// closeForm()

//=======================================================================================================

/**
 * Handles the button click by calling displayForm.
 * This function is a wrapper around the `displayForm` function. It can be used to
 * trigger the display of the form/modal, likely in response to some other logic or user interaction.
 */
function handleClick() {
	displayForm();
	submitForm();
	closeForm();
} // handleClick()
//=======================================================================================================

/**
 * Submits the form filled out by the user, so the book can be added to the library, and displayed
 */
function submitForm() {

	form.addEventListener("submit", (event) => {

		// Prevents the form from submitting
		event.preventDefault();

		// Validate input fields
		checkTitle();
		checkAuthor();
		checkNumberOfPages();
		checkStatus();


		clearTable();

		addBookToLibrary(bookId, titleElem.value, authorElem.value, numPagesElem.value, checkStatus());
		displayLibrary();

	});
} // submitForm()



//=======================================================================================================

/**
 * Displays the specified error message for the given input field.
 * 
 * @param {HTMLElement} input - The input field element that is being validated
 * @param {string} message - The error message to display next to the input field
 */
function showError(input, message) {

	const formField = input.parentElement;
	const small = formField.querySelector("small");

	small.textContent = message;

	formField.setAttribute("class", "form-field error");
} // showError()

//=======================================================================================================

/**
 * Updates the class of the parent element of the provided input field
 * to indicate a successful form input.
 * 
 * @param {HTMLElement} input - The input field whose parent element will be updated.
 */
function showSuccess(input) {

	const formField = input.parentElement;

	formField.classList.remove("error");
	formField.setAttribute("class", "form-field success");

	const error = formField.querySelector("small");
	error.textContent = "";

}// showSuccess()

//=======================================================================================================

/**
 * Determines whether the specified string is empty.
 * 
 * @param {String} str - The specified string.
 * 
 * @returns {Boolean} True if the string is empty. False otherwise
 */
function isEmpty(str) {
	return ((str === ""));
}// isEmpty()

//=======================================================================================================

/**
 * Determines if the specified value is between the specified range.
 * 
 * @param {Number} val - The specified value.
 * @param {Number} min - The lower bound of the range.
 * @param {Number} max - The upper bound of the range.
 * 
 * @returns {Boolean}  True if the value if between the specified range. False otherwise.
 */
function isBetween(val, min, max) {

	let isBetween = false;

	if ((val >= min) &&
		(val <= max)) {

		isBetween = true;

	} // if

	else {
		isBetween = false;
	}// else

	return isBetween;
}// isBetween()

//=======================================================================================================

/**
 * Validates the status of the book.
 * 
 * @returns {String} True  if the book has been read.  False if the book has not been read
 */
function checkStatus() {

	let readStatus = false;

	if ((haveRead.checked === true)) {

		readStatus = true;
		// haveRead = true;
		// haveNotRead = true;
	}// if

	else if ((haveNotRead.checked === true)) {
		readStatus = false;
	}// else if

	else if ((haveNotRead.checked == false) &&
		(haveRead.checked == false)) {

		let msg = "Please fill out this field.";
		showError(haveRead, msg);
	}// else if

	return readStatus;

}// checkStatus()

//=======================================================================================================


/**
 * Validates the title of the book entered by the user.
 */
function checkTitle() {

	/**
	 * Get the title entered by the user in the form.
	 * 
	 * @Note - The method .trim() was used to eliminate any white spaces
	 * entered by the user.
	 */
	const titleValue = titleElem.value.trim();

	if ((isEmpty(titleValue))) {
		let msg = "Title of book cannot be blank.";
		showError(titleElem, msg);
	}//if

	else {
		showSuccess(titleElem);
	}// else


}// checkTitle()

//=======================================================================================================

/**
 * Validates the input value for the book author.
 */
function checkAuthor() {

	const authorValue = authorElem.value.trim();

	const min = 3;
	const max = 30;


	let msg = "";

	if ((isEmpty(authorValue))) {

		msg = "Author of book cannot be blank."
		showError(authorElem, msg);

	} // if

	else if ((!isBetween(authorValue.length, min, max))) {

		msg = `Author of book must be between ${min} and ${max} characters.`;
		showError(authorElem, msg);

	} // else if

	else {
		showSuccess(authorElem);
	} // else

} // checkAuthor()

//=======================================================================================================

/**
 * Validates the input value for the number of pages of the book.
 */
function checkNumberOfPages() {

	const numPagesValue = numPagesElem.value.trim();


	if ((isEmpty(numPagesValue))) {

		let msg = "Number of pages cannot be blank.";
		showError(numPagesElem, msg);

	}// if

	else {

		showSuccess(numPagesElem);
	} // else			


}// checkNumberOfPages()

//=======================================================================================================

/**
 * Clears the input values entered by the user when the form is submitted.
 */
function clearInputs() {

	titleElem.value = "";
	authorElem.value = "";
	numPagesElem.value = "";

	haveNotRead.checked = false;
	haveRead.checked = false;
} // clearInputs()

//=======================================================================================================


// Trigger the 'click' event once the user clicks on the "Add New Book" button.
handleClick();