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

// Add book button
const addBookBtn = document.querySelector("#add-book-btn");
addBookBtn.addEventListener("click", displayForm);

function displayForm() {
  document.getElementById("#add-book").style.display = "";
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
}

// Clear data in form
const clearBtn = document.querySelector("#clear-btn");
clearBtn.addEventListener("click", clearForm);

function clearForm() {
  document.getElementById("add-book-form").reset();
}
