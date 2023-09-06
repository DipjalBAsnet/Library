let myLibrary = [];
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages long, ${read} yet`;
  };
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  return newBook;
}

function removeBookFromLibrary(index) {
  console.log("removed clicked");
  myLibrary = myLibrary.filter((book, i) => i !== index);
}

console.log(myLibrary);

function displayBooks() {
  const table = document.getElementById("bookTable");
  const newTable = table.cloneNode(false);

  myLibrary.forEach((book, index) => {
    const row = newTable.insertRow(index);
    row.insertCell(0).textContent = book.title;
    row.insertCell(1).textContent = book.author;
    row.insertCell(2).textContent = book.pages;
    row.insertCell(3).textContent = book.read;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.setAttribute("data-index", index);
    row.insertCell(4).appendChild(removeButton);

    removeButton.addEventListener("click", () => {
      const bookIndex = parseInt(removeButton.getAttribute("data-index"), 10);
      if (!isNaN(bookIndex)) {
        removeBookFromLibrary(bookIndex);
        displayBooks();
      }
    });
  });

  table.parentNode.replaceChild(newTable, table);
}

const form = document.querySelector(".form");
const addButton = document.getElementById("addButton");
const submit = document.getElementById("submit");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");

let isButtonClicked = false;
let isRead = true;

form.style.display = "none";

const onClickAdd = () => {
  console.log("clicked");
  form.style.display = "block";
  isButtonClicked = true;
};

const onClickRemove = () => {
  console.log("removed");
};

addButton.addEventListener("click", onClickAdd);

if (!onClickAdd) {
  form.style.display = "none";
}

read.addEventListener("click", () => {
  isRead = !isRead;
  read.textContent = isRead ? "read" : "not read";
});

const handleSubmit = (event) => {
  event.preventDefault();
  console.log("clicked submit btn");
  const bookTitle = title.value;
  const bookAuthor = author.value;
  const bookPages = pages.value;
  const bookRead = isRead ? "read" : "not read";

  addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);
  displayBooks();
  form.reset();
  form.style.display = "none";
};

submit.addEventListener("click", handleSubmit);
