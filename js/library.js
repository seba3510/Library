const form = document.querySelector("form");

const titleElem = document.querySelector("#book-title");
const authorElem = document.querySelector("#book-author");
const numPagesElem = document.querySelector("#num-pages");

const dialogElem = document.querySelector("#dialog");



//=======================================================================================================

/**
 * Array of objects that stores all books of the library.
 * 
 * @type {Book}
 * 
 * @note I manually added a few books to the array so I can see the display
 */
let library = [
    {
        "title": "The Hunger Games",
        "author": "Suzanne Collins",
        "pages": 400,
        "read": true
    },

    {
        "title": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "pages": 320,
        "read": false
    },

    {
        "title": "A Tale of Two Cities",
        "author": "Charles Dickens",
        "pages": 428,
        "read": false
    }
];

//=======================================================================================================

/**
 * Creates a new Book object 
 * 
 * @param {String} title - The title of the book 
 * @param {String} author - The author of the book
 * @param {Number} pages - The total number of pages that the book has
 * @param {Boolean} read - Status that indicates whether the book has been read, or not
 */
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}//Book()

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
    displayForm(); // Call displayForm to show the modal when this function is executed
    submitForm();
    closeForm();
} // handleClick()

//=======================================================================================================

function submitForm() {

    form.addEventListener("submit", (e) => {

        // Prevents the form from submitting
        e.preventDefault();

        checkTitle();


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

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

//=======================================================================================================


form.addEventListener("input", debounce((event) => {
    switch ((event.target.id)) {
        case "book-title":
            checkTitle();
            break;
        case "book-author":
            checkAuthor();
        case "num-pages":
            checkNumPages();
        default:
            break;
    }
}));

//=======================================================================================================


handleClick();