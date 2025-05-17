const library =
	[];

//=======================================================================================================

function Book
	(
		id,
		title,
		author,
		pages,
		read
	) {

	this.id =
		id;

	this.title =
		title;

	this.author =
		author;

	this.pages =
		formatNumber(pages);

	this.read =
		read;

} // Book()

//=======================================================================================================

function addBookToLibrary
	(
		id,
		title,
		author,
		pages,
		read
	) {

	const newBook =
		new Book
			(
				id,
				title,
				author,
				pages,
				read
			);

	library.push(newBook);

	bookId++;

} // addBookToLibrary()

//=======================================================================================================

function displayLibrary() {

	const body =
		document.querySelector("body");

	let tableContainer =
		document.querySelector("#table-container");

	const doesTableContainerExist =
		doesElementExist(tableContainer);

	if (!doesTableContainerExist) {

		tableContainer =
			document.createElement("div");

		tableContainer.setAttribute("id", "table-container");

		body.appendChild(tableContainer);

	} // if

	else {

		clearTable();

	} // else

	const table =
		document.createElement("table");

	const tableHeader =
		document.createElement("thead");

	const tableBody =
		document.createElement("tbody");

	table.appendChild(tableHeader);

	table.appendChild(tableBody);

	tableContainer.appendChild(table);

	table.style.visibility =
		"visible";

	const headerRow =
		document.createElement("tr");

	const bookIDHeaderCell =
		document.createElement("th");

	bookIDHeaderCell.textContent =
		"ID";

	bookIDHeaderCell.style.visibility =
		"hidden";

	const titleHeaderCell =
		document.createElement("th");

	titleHeaderCell.textContent =
		"Title";

	headerRow.appendChild(titleHeaderCell);

	const authorHeaderCell =
		document.createElement("th");

	authorHeaderCell.textContent =
		"Author";

	headerRow.appendChild(authorHeaderCell);

	const pagesHeaderCell =
		document.createElement("th");

	pagesHeaderCell.textContent =
		"Number of Pages";

	headerRow.appendChild(pagesHeaderCell);

	const statusHeaderCell =
		document.createElement("th");

	statusHeaderCell.textContent =
		"Has the book been read?";

	headerRow.appendChild(statusHeaderCell);

	tableHeader.appendChild(headerRow);

	const btnsContainer =
		document.createElement("div");

	btnsContainer.setAttribute("class", "btns-container");

	tableContainer.appendChild(btnsContainer);

	library.forEach((book => {

		const contentRow =
			document.createElement("tr");

		const bookIDCell =
			document.createElement("td");

		bookIDCell.textContent =
			`${book.id}`;

		bookIDCell.style.visibility =
			"hidden";

		const titleCell =
			document.createElement("td");

		titleCell.textContent =
			book.title;

		contentRow.appendChild(titleCell);

		const authorCell =
			document.createElement("td");

		authorCell.textContent =
			book.author;

		contentRow.appendChild(authorCell);

		const pagesCell =
			document.createElement("td");

		pagesCell.textContent =
			`${book.pages}`;

		contentRow.appendChild(pagesCell);

		const statusCell =
			document.createElement("td");

		statusCell.textContent =
			book.read;

		contentRow.appendChild(statusCell);

		tableBody.appendChild(contentRow);

		const div =
			document.createElement("div");

		div.setAttribute("id", "edit-btns-container");

		const deleteBtn =
			document.createElement("button");

		deleteBtn.setAttribute("class", "remove-btn");

		deleteBtn.setAttribute("data-bookID", `${book.id}`);

		const deleteIcon =
			document.createElement("img");

		const path =
			"../images/delete.png";

		deleteIcon.setAttribute("src", path);

		deleteIcon.setAttribute("class", "remove-icon")

		deleteBtn.appendChild(deleteIcon);

		div.appendChild(deleteBtn);

		const changeStatusBtn =
			document.createElement("button");

		changeStatusBtn.setAttribute("data-bookID", `${book.id}`);

		changeStatusBtn.textContent =
			"Change Status";

		div.appendChild(changeStatusBtn);

		btnsContainer.appendChild(div);

		clearInputs();

		removeBookFromLibrary
			(
				deleteBtn,
				contentRow
			);

		toggleBookStatus
			(
				changeStatusBtn,
				statusCell,
				book.read
			);

	})); // foreach

} // displayLibrary()

//=======================================================================================================

function removeBookFromLibrary(button, row) {

	button.addEventListener("click", () => {

		// Removes the book from the table display
		row.remove();

		const index =
			Number
				(
					button.getAttribute("data-bookID")
				);

		library.splice(index, 1);

	});

} // removeBookFromLibrary()

//=======================================================================================================

function clearTable() {

	const tableContainer =
		document.querySelector("#table-container");

	tableContainer.innerHTML =
		"";

} // clearTable()

//=======================================================================================================

function toggleBookStatus
	(
		button,
		cell,
		status
	) {

	button.addEventListener("click", () => {


		switch (status) {

			case true:

				status =
					false;

				break;

			case false:

				status =
					true;

				break;

			default:

				break;

		} // switch			

		const index =
			Number
				(
					button.getAttribute("data-bookID")
				);

		library[index].read =
			status

		cell.textContent =
			status;

	});

} // toggleBookStatus();

//=======================================================================================================


function doesElementExist(element) {

	return (element != null);

} // doesElementExist()

//=======================================================================================================

function formatNumber(num) {

	const formatter =
		new Intl.NumberFormat("en-US");

	const formattedNumber =
		formatter.format(num);

	return formattedNumber;

} //formatNumber()

//=======================================================================================================
