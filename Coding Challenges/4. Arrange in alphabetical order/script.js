function logBookTitlesInOrder(books, callback) {
    // Extract titles using map function
    const titles = books.map(book => book.title);

    // Sort titles alphabetically
    titles.sort();

    // Pass sorted titles to callback function
    callback(titles);
}

// Example usage:

// Sample list of book objects
const books = [
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 }
];

// Callback function to log titles in alphabetical order
function logTitles(titles) {
    console.log("Titles in alphabetical order:");
    titles.forEach(title => console.log(title));
}

// Call logBookTitlesInOrder with books array and callback function
logBookTitlesInOrder(books, logTitles);
