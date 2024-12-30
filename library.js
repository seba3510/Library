const dialog = document.querySelector("#dialog");
const openButton = document.querySelector("#open-modal");
const closeButton = document.querySelector("#close-modal");

// "Show the dialog" button opens the dialog modally
openButton.addEventListener("click", () => {
    dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
    dialog.close();
});
