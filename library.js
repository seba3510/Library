const library = [];

const dialog = document.querySelector("#dialog");
const openButton = document.querySelector("#open-modal");
const closeButton = document.querySelector("#close-modal");
const form = document.querySelector("form");

const title = document.querySelector("#book-title");
const author = document.querySelector("#book-author");
const numPages = document.querySelector("#num-pages");
// const hasRead = document.querySelector("");

//========================================================================

function Book(author, title, pages, hasRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.hasRead = hasRead;
}//Book()
//========================================================================

//========================================================================

function addBookToLibrary(author, title, numPages) {
    let newBook = new Book(author.value, title.value, numPages.value);
    library.push(newBook);
}//addBookToLibrary()

//========================================================================


// "Show the dialog" button opens the dialog modally
openButton.addEventListener("click", () => {
    dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
    dialog.close();
});


function handleClick() {
    let n = library.length;

    for (let i = 0; i < n; i++) {
        displayForm();
        validateForm();
    }//for()

} // handleClick()
//========================================================================

function displayForm() {
    openButton.addEventListener("click", (event) => {
        dialog.showModal();
    });
}//displayForm()
//========================================================================


handleClick();