const form =
    document.querySelector("form");

const titleElem =
    document.querySelector("#book-title");

const authorElem =
    document.querySelector("#book-author");

const numPagesElem =
    document.querySelector("#num-pages");

const haveRead =
    document.querySelector("#agree");

const haveNotRead =
    document.querySelector("#disagree");

const dialogElem =
    document.querySelector("#dialog");

let bookId =
    Number(0);

//=======================================================================================================

function displayForm() {

    const btn =
        document.querySelector("#open-modal");

    btn.addEventListener("click", () => {
        dialogElem.showModal();
    });

} // displayForm()

//=======================================================================================================


function closeForm() {

    const closeDialogBtn =
        document.querySelector("#close-modal");

    closeDialogBtn.addEventListener("click", (event) => {

        //Prevent the form from submitting
        event.preventDefault();

        dialogElem.close();

    });

}// closeForm()

//=======================================================================================================

function btnAddBookClick() {

    displayForm();

    submitForm();

    closeForm();

} // btnAddBookClick()

//=======================================================================================================

function submitForm() {

    form.addEventListener("submit", (event) => {


        try {

            if (isDataValid()) {


                event.preventDefault();

                const title =
                    titleElem.value;

                const author =
                    authorElem.value;

                const numPages =
                    numPagesElem.value;


                addBookToLibrary
                    (
                        bookId,
                        title,
                        author,
                        numPages,
                        checkStatus()
                    );


                displayLibrary();

            } // if

        }  // try

        catch (error) {

            const err =
                error.message;

            alert(err);

        } // catch

    });

} // submitForm()

//=======================================================================================================

function isEmpty(str) {

    const result =
        (str === "") ? true
            : false;

    return result;

}// isEmpty()

//=======================================================================================================

function checkNumPages() {

    const areNumPagesValid =
        numPagesElem.value
        > 0;

    if (!areNumPagesValid) {

        const err =
            "The number of pages should be greater than 0.";

        throw new RangeError(err);

    } // if

    return true;

} // checkNumPages()

//=======================================================================================================

function checkStatus() {

    let readStatus =
        false;

    const haveReadIsChecked =
        haveRead.checked;

    const haveNotReadIsChecked =
        haveNotRead.checked;

    if (haveReadIsChecked) {

        readStatus =
            true;

    } // if

    else if (haveNotReadIsChecked) {

        readStatus =
            false;

    } // else if

    else if (
        (!haveReadIsChecked) &&
        (!haveNotReadIsChecked)
    ) {

        const err =
            "Please indicate if you have read this book.";

        throw new Error(err);

    } // else if

    return readStatus;

}// checkStatus()

//=======================================================================================================

function checkTitle() {

    const title =
        titleElem.value.trim();

    const isTitlePresent =
        !isEmpty(title);

    if (!isTitlePresent) {

        const err =
            "The book title is required.";

        throw new Error(err);

    } // if

    return true;

}// checkTitle()

//=======================================================================================================

function checkAuthor() {

    let isValid =
        false;

    const author =
        authorElem.value.trim();

    const min =
        3;
    const max =
        30;

    const isAuthorPresent =
        !isEmpty(author);

    const authorLength =
        author.length;

    const isBetweenRange =
        (authorLength >= min) &&
        (authorLength <= max);

    let error;

    if (!isAuthorPresent) {

        error =
            "The author is required.";

        throw new Error(error);

    } // if

    else if (!isBetweenRange) {

        err =
            `The name of the author must be between ${min} and ${max} characters.`;

        throw new RangeError(error);

    } // else if

    else {

        isValid =
            true;

    } // else 

    return isValid;

} // checkAuthor()

//=======================================================================================================


function checkNumberOfPages() {

    const numPages =
        numPagesElem.value.trim();

    const isPresent =
        isEmpty(numPages);

    if (!isPresent) {

        const err =
            "The number of page are required.";

        throw new Error(err);

    } // if


}// checkNumberOfPages()

//=======================================================================================================

function isDataValid() {

    const isBookTitleValid =
        checkTitle();

    const isAuthorValid =
        checkAuthor();

    const areNumPagesValid =
        checkNumPages();

    const isReadStatusChecked =
        checkStatus();

    const result =
        isBookTitleValid &&
        isAuthorValid &&
        areNumPagesValid &&
        isReadStatusChecked;

    return result;

} // isDataValid()

//=======================================================================================================


function clearInputs() {

    titleElem.value = "";

    authorElem.value = "";

    numPagesElem.value = "";


    haveNotRead.checked =
        false;

    haveRead.checked =
        false;

} // clearInputs()

//=======================================================================================================

btnAddBookClick();