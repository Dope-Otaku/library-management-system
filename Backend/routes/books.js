const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookcontroller");

// Get all books
router.get("/", bookController.getAllBooks);

// Add a new book
router.post("/", bookController.addBook);

module.exports = router;
