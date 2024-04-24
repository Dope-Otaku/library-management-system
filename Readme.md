# Library Management System

A simple Library Management System designed to manage books with details like title and author.

## MySQL Database Setup

Follow the steps below to set up the MySQL database for the Library Management System:

### Database Creation

1. Open your MySQL command-line client or terminal.
2. Run the following SQL commands to create the database and table:

```sql
-- Create a new database named library_management_system
CREATE DATABASE library_management_system;

-- Use the library_management_system database
USE library_management_system;

-- Create a new table named books
CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
);
```

## Database and Table Screenshots

### Database: library_management_system

![Database Schema](./Assets/ss%20of%20databases.png)

### Table: books

![Table Schema](./Assets/ss%20of%20tables.png)
![Books Schema](./Assets/ss%20of%20books.png)

## Backend Setup

### Environment Configuration

1. Navigate to the backend folder of your project.
2. Create a `.env` file in the backend folder.
3. Add the following environment variables to the `.env` file:

```env
MYSQL_USERNAME={your_username}
MYSQL_PASSWORD={your_password}
```

Replace `{your_username}` and `{your_password}` with your MySQL username and password respectively.

### Installation and Run

1. Open your terminal and navigate to the backend folder.
2. Run the following commands to install dependencies and start the server:

```bash
npm install  # Install dependencies
node app.js  # Start the server
```

The server should start running, and you should see a message indicating that the server is listening on a specific port.

## Frontend Setup

### Installation and Run

1. Navigate to the frontend folder of your project.
2. and now hit go live button in the bottom right corner of the vs code editor.

![Go live](./Assets/ss%20of%20go-live.png)
