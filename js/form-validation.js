const form = document.querySelector("form");

const titleElem = document.querySelector("#book-title");
const authorElem = document.querySelector("#book-author");
const numPagesElem = document.querySelector("#num-pages");
const haveRead = document.querySelector("#agree");
const haveNotRead = document.querySelector("#disagree");


const dialogElem = document.querySelector("#dialog");



//=======================================================================================================

/**
 * Displays the form when the user clicks on the button
 * 
 * This function listens for a click event on the button with the ID "open-modal".
 * When the button is clicked, it shows a modal dialog (assumed to be stored in the `dialogElem` variable).
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

function closeForm() {
    const btn = document.querySelector("#close-modal");

    btn.addEventListener("click", () => {
        dialogElem.close();
    });
}// closeForm()

//=======================================================================================================

/**
 * Handles the button click by calling displayForm.
 * 
 * This function is a wrapper around the `displayForm` function. It can be used to
 * trigger the display of the form/modal, likely in response to some other logic or user interaction.
 */
function handleClick() {
    displayForm();
    submitForm();
    closeForm();
} // handleClick()

//=======================================================================================================

function submitForm() {

    form.addEventListener("submit", (event) => {

        // Prevents the form from submitting
        event.preventDefault();

        checkTitle();
        checkAuthor();
        checkNumberOfPages();
        checkStatus();
        addBookToLibrary(titleElem.value, authorElem.value, numPagesElem.value, checkStatus());
        // clearInputs();
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
 * to indicate a successful form input
 * 
 * @param {HTMLElement} input - The input field whose parent element will be updated
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
 * Determines whether the specified string is empty
 * 
 * @param {String} str - The specified string
 * 
 * @returns {Boolean} True if the string is empty. False otherwise
 */
function isEmpty(str) {
    return ((str === ""));
}// isEmpty()

//=======================================================================================================

/**
 * Determines if the specified value is between the specified range
 * 
 * @param {Number} val - The specified value
 * @param {Number} min - The lower bound of the range
 * @param {Number} max - The upper bound of the range
 * 
 * @returns {Boolean}  True if the value if between the specified range. False otherwise
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
 * Validates the status of the book
 * 
 * @returns {String} 'Yes' if the book has been read.  'No' if the book has not been read
 */
function checkStatus() {

    let readStatus = false;

    if ((haveRead.checked === true)) {

        readStatus = true;

    }

    else if ((haveNotRead.checked === true)) {

        readStatus = false;

    }

    else if ((haveNotRead.checked == false) &&
        (haveRead.checked == false)) {

        let msg = "Please fill out this field.";
        showError(haveRead, msg);

    }



    return readStatus;





}// checkStatus()

//=======================================================================================================


/**
 * Validates the title of the book entered by the user
 */
function checkTitle() {

    // Get value entered by the user
    const titleValue = titleElem.value.trim();

    if ((isEmpty(titleValue))) {
        let msg = "Title of book cannot be blank.";
        showError(titleElem, msg);

    }

    else {
        showSuccess(titleElem);
    }


}// checkTitle()

//=======================================================================================================

/**
 * Validates the input value for the book author
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
 * Validates the input value for the number of pages of the book
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
 * Clears the input values entered by the user then the form is submitted
 */
function clearInputs() {

    titleElem.value = "";
    authorElem.value = "";
    numPagesElem.value = "";

    haveNotRead.checked = false;
    haveRead.checked = false;

    // const formField = document.querySelector(".form-field");

    form.classList.remove("form-field success");

} // clearInputs()

//=======================================================================================================

// const debounce = (fn, delay = 500) => {
//     let timeoutId;
//     return (...args) => {
//         // cancel the previous timer
//         if (timeoutId) {
//             clearTimeout(timeoutId);
//         }
//         // setup a new timer
//         timeoutId = setTimeout(() => {
//             fn.apply(null, args)
//         }, delay);
//     };
// };

//=======================================================================================================


// form.addEventListener("input", debounce((event) => {

//     switch ((event.target.id)) {
//         case "book-title":
//             checkTitle();
//             break;
//         case "book-author":
//             checkAuthor();
//             break;
//         case "num-pages":
//             checkNumPages();
//             break;
//         case "agree":
//             checkStatus();
//             break;
//         case "disagree":
//             checkStatus();
//             break;
//         default:
//             break;
//     }// switch()
// }));

//=======================================================================================================


handleClick();