const booksContainer = document.querySelector(".books-container");
const submitButton = document.querySelector(".submit-button");
const deleteButton = document.querySelectorAll(".delete-button");
const newBookButton = document.querySelector(".new-book");
const formModal = document.querySelector(".form-dialog");
const closeModal = document.querySelector(".close-button");

const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;

  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.isRead ? "read" : "not read yet"
    }`;
  };
}

function addBookToLibrary(Book) {
  myLibrary.push(Book);
  loopArray(myLibrary);
}

newBookButton.addEventListener("click", () => {
  formModal.showModal();
});
closeModal.addEventListener("click", () => {
  formModal.close();
});

function loopArray(array) {
  booksContainer.innerHTML = "";
  array.forEach((book, index) => {
    let newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.setAttribute("index", index);

    let bookName = document.createElement("h2");
    bookName.textContent = book.title;
    newCard.appendChild(bookName);

    let bookInfos = document.createElement("div");
    bookInfos.classList.add("book-infos");
    newCard.appendChild(bookInfos);
    let ul = document.createElement("ul");
    bookInfos.appendChild(ul);
    let liAuthor = document.createElement("li");
    liAuthor.textContent = `Author: ${book.author}`;
    ul.appendChild(liAuthor);
    let liPages = document.createElement("li");
    liPages.textContent = `Pages: ${book.pages}`;
    ul.appendChild(liPages);
    let liRead = document.createElement("li");
    liRead.textContent = "Read: ";
    ul.appendChild(liRead);
    let liReadCheckBox = document.createElement("input");
    liReadCheckBox.type = "checkbox";
    liReadCheckBox.name = "is_read";
    liReadCheckBox.id = "is-read";
    liReadCheckBox.checked = true;
    liRead.appendChild(liReadCheckBox);
    let liButton = document.createElement("li");
    ul.appendChild(liButton);
    let liButtonDelete = document.createElement("button");
    liButtonDelete.type = "button";
    liButtonDelete.classList.add("button-30");
    liButtonDelete.classList.add("delete-button");
    liButtonDelete.textContent = "Delete";
    liButton.appendChild(liButtonDelete);

    liButtonDelete.addEventListener("click", () => {
      booksContainer.removeChild(newCard);
      console.log(newCard);
      myLibrary.splice(newCard, 1);
    });
    booksContainer.appendChild(newCard);
  });
}

submitButton.addEventListener("click", () => {
  const title = document.querySelector("#book-title");
  const author = document.querySelector("#author-name");
  const pages = document.querySelector("#pages");

  const newBook = new Book(title.value, author.value, pages.value);
  addBookToLibrary(newBook);
});

const Dune = new Book("Dune", "Frank Harbert", 712, false);
const MartinEden = new Book("Martin Eden", "Jack London", 517, false);
addBookToLibrary(Dune);
addBookToLibrary(MartinEden);
