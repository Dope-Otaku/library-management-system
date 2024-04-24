//library management system server
const express = require("express");
const app = express();
const booksRoutes = require("./routes/books");
const path = require("path");

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, "../frontend")));

// Middleware
app.use(express.json());

// Routes
app.use("/api/books", booksRoutes);

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
