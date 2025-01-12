
const form = document.querySelector("form");


const titleElem = document.querySelector("#book-title");


const authorElem = document.querySelector("#book-author");


const numPagesElem = document.querySelector("#num-pages");


const haveRead = document.querySelector("#agree");


const haveNotRead = document.querySelector("#disagree");

const dialogElem = document.querySelector("#dialog");


let bookId = Number(0);
//=======================================================================================================

/**
 * Displays the form so that the user can add a book to the library
 */
function displayForm() {


	const btn = document.querySelector("#open-modal");

	btn.addEventListener("click", () => {
		dialogElem.showModal();
	});

} // displayForm()

//=======================================================================================================

/**
 * Closes the form
 */
function closeForm() {

	const btn = document.querySelector("#close-modal");

	btn.addEventListener("click", () => {
		dialogElem.close();
	});
}// closeForm()

//=======================================================================================================


function handleClick() {
	displayForm();
	submitForm();
	closeForm();
} // handleClick()
//=======================================================================================================

/**
 * Validates each input field, and submits the form
 */
function submitForm() {



	form.addEventListener("submit", (event) => {

		// Prevent the form from submitting
		event.preventDefault();

		// Validate each input field
		checkTitle();
		checkAuthor();
		checkNumberOfPages();
		checkStatus();


		addBookToLibrary(bookId, titleElem.value, authorElem.value, numPagesElem.value, checkStatus());
		displayLibrary();
	});

} // submitForm()



//=======================================================================================================

/**
 * Displays the specified error message
 * 
 * @param {@HTMLElement} input - Input element that did not pass its validation
 * @param {*} message - The error message to display
 */
function showError(input, message) {

	const formField = input.parentElement;
	const small = formField.querySelector("small");

	small.textContent = message;

	formField.setAttribute("class", "form-field error");
} // showError()

//=======================================================================================================


function showSuccess(input) {

	const formField = input.parentElement;

	formField.classList.remove("error");
	formField.setAttribute("class", "form-field success");

	const error = formField.querySelector("small");
	error.textContent = "";

}// showSuccess()

//=======================================================================================================

/**
 * Determines if the specified string is empty.
 * 
 * @param {String} str - The specified string to validate
 * @returns True if the string is empty.  False if it is not empty
 */
function isEmpty(str) {
	return ((str === ""));
}// isEmpty()

//=======================================================================================================

/**
 * Determine if the specified value is in between the specified range
 * 
 * @param {Number} val - The number to validate
 * @param {*} min - The lower-bound value 
 * @param {*} max - The upper-bound value
 * @returns 
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
 * Validates the book's read status
 * 
 * @returns True if the book has been read, and false if the book has not been read
 */
function checkStatus() {

	let readStatus = false;

	if ((haveRead.checked === true)) {

		readStatus = true;
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
 * Validates the book title entered by the user
 */
function checkTitle() {


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
 * Validates the name of the book author entered by the user
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
 * Validates the book's number of pages
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
 * Clears the input values of the form when it is submitted
 */
function clearInputs() {

	titleElem.value = "";
	authorElem.value = "";
	numPagesElem.value = "";

	haveNotRead.checked = false;
	haveRead.checked = false;
} // clearInputs()

//=======================================================================================================

handleClick();