import React, { useState } from "react";

function Library() {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const borrowBook = (book) => {
    setBorrowedBooks([...borrowedBooks, book]);
  };

  const returnBook = (index) => {
    const updatedBooks = [...borrowedBooks];
    updatedBooks.splice(index, 1);
    setBorrowedBooks(updatedBooks);
  };

  return (
    <div>
      <h2>The Bookshelf</h2>
      <ul>
        {borrowedBooks.map((book, index) => (
          <li key={index}>
            {book}
            <button onClick={() => returnBook(index)}>Return</button>
          </li>
        ))}
      </ul>
      <button onClick={() => borrowBook("The Hobbit")}>The Hobbit</button>
      <button onClick={() => borrowBook("The Fellowship of the Ring")}>
        The Fellowship of the Ring
      </button>
      <button onClick={() => borrowBook("The Two Towers")}>
        The Two Towers
      </button>
      <button onClick={() => borrowBook("The Return of the King")}>
        The Return of the King
      </button>
      <button onClick={() => borrowBook("The Silmarillion")}>
        The Silmarillion
      </button>
    </div>
  );
}

export default Library;
