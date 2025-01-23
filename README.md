# Online Library System

Welcome to the Online Library System! This project is a web application for managing a library of books. Users can browse books, view details, add new books, and more.

## Features

1. **Home Page**
   - Landing page with a welcome message and a list of book categories.
   - Display a list of popular books with a link to view more details.
   - Navigation bar with links to "Home", "Browse Books", and "Add Book".

2. **Browse Books Page**
   - Display a list of books filtered by category.
   - Dynamic routing to filter books by category (e.g., /books/:category).
   - Each book has a "View Details" link that routes to the Book Details page.
   - Search functionality to filter books by title or author.

3. **Book Details Page**
   - Dynamic route that displays detailed information about a selected book.
   - Shows book title, author, description, and rating.
   - Includes a "Back to Browse" button or link to return to the Browse Books page.

4. **Add Book Page**
   - A form for adding a new book to the library.
   - Uses Redux to manage the state of the books list.
   - After submission, redirects the user to the Browse Books page with the newly added book displayed.
   - Implements form validation to ensure all fields are correctly filled out.

5. **404 Page**
   - A "Page Not Found" route for any undefined routes.
   - Includes a link back to the Home page.

## Installation To run this application locally, follow these steps:

👉 Prerequisites Make sure you have Node.js and npm (Node Package Manager) installed on your machine.

Step 1. Clone the repository: git clone https://github.com/your-username/Online-Library-System.git

Step 2: Navigate to the project directory: cd Online-Library-System

Step 3: Install dependencies: npm install

Step 4: Run the application: npm run dev

Step 5: Open the application in your browser: Open your browser and go to http://localhost:5173 (or replace 5173 with your specific port number if different) to see the app in action.