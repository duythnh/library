const myLibrary = [];

function Book(Title, Author, Pages, Read) {
  this.Title = Title;
  this.Author = Author;
  this.Pages = Pages;
  this.Read = Read;
}

function addBookToLibrary(Title, Author, Pages, Read) {
  let book = new Book(Title, Author, Pages, Read);
  myLibrary.push(book);
  displayBooksOnPage();
}

function displayBooksOnPage() {
  let index = 0;
  const books = document.querySelector(".books");
  books.innerHTML = "";

  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("card");
    books.appendChild(card);

    for (let key in book) {
      console.log(`${key}: ${book[key]}`);
      const para = document.createElement("p");
      para.textContent = `${key}: ${book[key]}`;
      card.appendChild(para);
    }

    // create remove book button
    const removeBookBtn = document.createElement("button");
    removeBookBtn.classList.add("remove-book-btn");
    removeBookBtn.textContent = "Remove";
    console.log("Show me my current array objects inside of foreach...", book);

    // link the data attribute of the remove button to the array and card
    removeBookBtn.dataset.linkedArray = index;
    index++;
    console.log(
      "Show me the dataset link back to the array...",
      removeBookBtn.dataset.linkedArray
    );
    card.appendChild(removeBookBtn);
    removeBookBtn.addEventListener("click", removeBookFromLibrary);

    function removeBookFromLibrary() {
      let bookToRemove = removeBookBtn.dataset.linkedArray;
      console.log(
        "Attempting to remove array item via data attribute...",
        parseInt(bookToRemove)
      );
      myLibrary.splice(parseInt(bookToRemove), 1);
      card.remove();
      displayBooksOnPage();
    }
  });
}

addBookToLibrary(
  "Fire and Blood",
  "George R. R. Martin",
  "736 pages",
  "not read yet"
);
addBookToLibrary(
  "A Dance with Dragons",
  "George R. R. Martin",
  "1,056 pages",
  "not read yet"
);

/*
 * A form adds new book to the array
 */

// Open form
const openForm = document.querySelector(".form");
const addBookBtn = document.querySelector("#add-book-btn");
addBookBtn.addEventListener("click", displayForm);

function displayForm() {
  openForm.classList.add("open-form");
  console.log(openForm);
}

//Submit new book
const submitBtn = document.querySelector("#submit-form-btn");
submitBtn.addEventListener("click", addFormData);

function addFormData() {
  let Title = document.getElementById("Title").value;
  let Author = document.getElementById("Author").value;
  let Pages = document.getElementById("Pages").value;
  let Read = document.getElementById("Read").value;

  if (Title == "" || Author == "" || Pages == "" || Read == "") {
    return;
  }
  addBookToLibrary(Title, Author, Pages, Read);

  // reset form after submit
  document.getElementById("add-book-form").reset();
  openForm.classList.remove("open-form");
}

// Clear data in form
const clearBtn = document.querySelector("#clear-btn");
clearBtn.addEventListener("click", clearForm);

function clearForm() {
  document.getElementById("add-book-form").reset();
}

// Close form when click at blank space
const formOverlay = document.querySelector("#form-overlay");
formOverlay.addEventListener("click", closeFormOverlay);

function closeFormOverlay(event) {
  if (event.target === formOverlay) {
    openForm.classList.remove("open-form");
  }
}

// Close form button
const closeBtn = document.querySelector("#close-form-btn");
closeBtn.addEventListener("click", closeFormBtn);

function closeFormBtn() {
  openForm.classList.remove("open-form");
}
