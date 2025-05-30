import { library } from "./library.js";
class Form {


    constructor() {

    } // constructor()

    //======================================================================


    #displayForm() {

        // this.#clearData();

        const button =
            document.querySelector
                ("#open-modal");

        const dialogBox =
            document.querySelector
                ("#dialog-box");

        const haveRead =
            document.querySelector
                ("#have-read");

        haveRead.checked =
            false;

        button.addEventListener("click", () => {

            dialogBox.showModal();


        }); // addEventListener()

    } // displayForm()

    //======================================================================

    #closeForm() {

        const dialogBox =
            document.querySelector
                ("#dialog-box");

        const button =
            document.querySelector
                ("#close-modal");

        button.addEventListener("click", (event) => {

            event.preventDefault();

            dialogBox.close();

        }); // addEventListener


    } // closeForm()

    //======================================================================


    //======================================================================

    clearData() {

        const title =
            document.querySelector
                ("#book-title");

        const author =
            document.querySelector
                ("#book-author");

        const pages =
            document.querySelector
                ("#num-pages");

        const haveRead =
            document.querySelector
                ("#haveRead");

        const haveNotRead =
            document.querySelector
                ("#not-read");

        title.value = "";

        author.value = "";

        pages.value = "";

        haveNotRead.checked = false;

        haveRead.checked = false;

    } // clearData()

    //======================================================================

    #submitForm() {

        const form =
            document.querySelector
                ("form");

        form.addEventListener("submit", (event) => {

            event.preventDefault();

            const title =
                document.querySelector
                    ("#book-title").value

            const author =
                document.querySelector
                    ("#book-author").value;

            const pages =
                Number
                    (
                        document.querySelector
                            ("#num-pages").value
                    );

            const haveRead =
                document.querySelector
                    ("#have-read");

            const hasBookBeenRead =
                haveRead.checked;

            const haveNotRead =
                document.querySelector
                    ("#not-read").checked;

            const readStatus =
                (hasBookBeenRead === true)
                    ? true : false;

            library.addBook
                (
                    library.bookID,
                    title,
                    author,
                    pages,
                    readStatus
                );

            library.displayBooks();

            this.clearData();

        }); // addEventListener

    } // submitForm()

    //======================================================================

    addNewBook() {

        this.#displayForm();

        this.#closeForm();

        this.#submitForm();

    } // addNewBook()

    //======================================================================


} // class

const form =
    new Form();

form.addNewBook();