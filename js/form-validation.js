

const form = document.querySelector("form");


const titleElem = document.querySelector("#book-title");


const authorElem = document.querySelector("#book-author");


const numPagesElem = document.querySelector("#num-pages");


const haveRead = document.querySelector("#agree");


const haveNotRead = document.querySelector("#disagree");

const dialogElem = document.querySelector("#dialog");


let bookId = Number(0);
//=======================================================================================================

function displayForm() {


	const btn = document.querySelector("#open-modal");

	btn.addEventListener("click", () => {
		dialogElem.showModal();
	});

} // displayForm()

//=======================================================================================================

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


function submitForm() {

	form.addEventListener("submit", (event) => {


		event.preventDefault();


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


function isEmpty(str) {
	return ((str === ""));
}// isEmpty()

//=======================================================================================================


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

function clearInputs() {

	titleElem.value = "";
	authorElem.value = "";
	numPagesElem.value = "";

	haveNotRead.checked = false;
	haveRead.checked = false;
} // clearInputs()

//=======================================================================================================

handleClick();