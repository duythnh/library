const myLibrary = [];

function Book(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
}

function addBookToLibrary(title, author, page, read) {
  let book = new Book(title, author, page, read);
  myLibrary.push(book);
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

displayBooksOnPage();
