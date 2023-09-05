const myLibrary = [];
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

// const book1 = addBookToLibrary("Atomic Habits", "James Clear", 306, "not read");
// const book2 = addBookToLibrary(
//   "The Great Gatsby",
//   "F. Scott Fitzgerald",
//   180,
//   "read"
// );
// const book3 = addBookToLibrary(
//   "To Kill a Mockingbird",
//   "Harper Lee",
//   281,
//   "read"
// );
// const book4 = addBookToLibrary("1984", "George Orwell", 328, "not read");
// const book5 = addBookToLibrary(
//   "The Catcher in the Rye",
//   "J.D. Salinger",
//   224,
//   "read"
// );

// const bookList = [book1, book2, book3, book4, book5];

console.log(myLibrary);

function displayBooks() {
  const table = document.getElementById("bookTable");

  myLibrary.forEach((book, index) => {
    const row = table.insertRow(index + 1);
    row.insertCell(0).textContent = book.title;
    row.insertCell(1).textContent = book.author;
    row.insertCell(2).textContent = book.pages;
    row.insertCell(3).textContent = book.read;
  });
}
displayBooks();

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
