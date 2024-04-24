const backendBaseUrl = "http://localhost:3000"; // Replace with your backend URL

// Fetch book list from the backend
fetch(`${backendBaseUrl}/api/books`)
  .then((response) => response.json())
  .then((data) => {
    const bookList = document.getElementById("bookList");
    data.forEach((book) => {
      const listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
      listItem.textContent = `${book.title} by ${book.author}`;
      bookList.appendChild(listItem);
    });
  })
  .catch((error) => console.error("Error fetching book list:", error));

// Add book form submission
const addBookForm = document.getElementById("addBookForm");
addBookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;

  // Check if title and author are provided
  if (!title || !author) {
    console.error("Please provide both title and author");
    return;
  }

  fetch(`${backendBaseUrl}/api/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, author }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Book added:", data);
      // Refresh book list or provide appropriate feedback
      const bookList = document.getElementById("bookList");
      const listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
      listItem.textContent = `${data.title} by ${data.author}`;
      bookList.appendChild(listItem);
      addBookForm.reset();
    })
    .catch((error) => console.error("Error adding book:", error));
});
