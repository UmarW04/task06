<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Library</title>
</head>
<body>
    <div class="container">
        <ul id="book-list" class="book-list"></ul>
        <div class="add-book">
            <h2>Add a Book</h2>
            <form id="add-book-form">
                <div class="input-group">
                    <label for="title">Title</label>
                    <input type="text" id="title" required>
                </div>
                <div class="input-group">
                    <label for="author">Author</label>
                    <input type="text" id="author" required>
                </div>
                <div class="input-group">
                    <label for="isbn">ISBN</label>
                    <input type="text" id="isbn" required>
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
        <div class="search-books">
            <h2>Search Books</h2>
            <div class="input-group">
                <label for="search-query">Search Query</label>
                <input type="text" id="search-query">
            </div>
            <button onclick="searchBooks()">Search</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
