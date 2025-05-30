class Book {

    #id;
    #title;
    #author;
    #pages;
    #read;

    //=========================================================================================================

    get id() {

        return this.#id;

    } // getId()

    //========================================================================================================

    set id(value) {

        const isInt =
            Number.isInteger
                (value);

        if (!isInt) {

            const error =
                "The book ID must be an integer.";

            throw new TypeError(error);

        } // if

        this.#id =
            value;

    } // setId()

    //=========================================================================================================

    get title() {

        return this.#title;

    } // getTitle()

    //=========================================================================================================

    set title(value) {

        const isString =
            typeof value === "string";

        if (!isString) {

            const error =
                "The title must be a string.";

            throw new TypeError(error);

        } // if

        this.#title =
            value;

    } // setTitle()


    //=========================================================================================================

    get author() {

        return this.#author;

    } // getAuthor()


    //=========================================================================================================

    set author(value) {

        this.#author =
            value;

    } // setAuthor()


    //=========================================================================================================

    get pages() {

        return this.#pages;

    } // getPages()


    //=========================================================================================================

    set pages(value) {

        const isInteger =
            Number.isInteger
                (value);

        const areNumPagesValid =
            value > 0;

        let error = "";

        if (!isInteger) {

            error =
                "The number of pages must " +
                "be an integer.";

            throw new TypeError(error);

        } // if

        if (!areNumPagesValid) {

            error =
                "The number of pages must be " +
                "greater than 0.";

            throw new RangeError(error);

        } //  if

        this.#pages =
            value;

    } // setPages()


    //=========================================================================================================

    get read() {

        return this.#read;

    } // getRead()


    //=========================================================================================================

    set read(value) {

        const isBoolean =
            typeof value === "boolean";

        if (!isBoolean) {

            const error =
                "The read status must be a boolean.";

            throw new TypeError(error);

        } // if

        else {

            this.#read =
                value;

        } // else

    } // setRead()

    //=========================================================================================================


    constructor
        (
            id,
            title,
            author,
            pages,
            read
        ) {

        this.#id =
            id;

        this.title =
            title;

        this.author =
            author;

        this.pages =
            pages;

        this.read =
            read;

    } // constructor()

    //=========================================================================================================

} // class

export { Book };