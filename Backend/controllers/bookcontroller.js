const db = require("../database/db");

// Get all books
exports.getAllBooks = (req, res) => {
  const query = "SELECT * FROM books";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching books:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(results);
    }
  });
};

// Add a new book
exports.addBook = (req, res) => {
  const { title, author } = req.body;

  // Check if title and author are provided
  if (!title || !author) {
    return res.status(400).json({ error: "Title and author are required" });
  }

  const query = "INSERT INTO books (title, author) VALUES (?, ?)";
  db.query(query, [title, author], (err, result) => {
    if (err) {
      console.error("Error adding book:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json({ id: result.insertId, title, author });
    }
  });
};
