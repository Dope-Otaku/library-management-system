//library management system server
const express = require("express");
const app = express();
const booksRoutes = require("./routes/books");
const path = require("path");
const cors = require("cors");

// Enable CORS for all routes
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use("/api/books", booksRoutes);

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
