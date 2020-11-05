import React, { useState, useEffect } from 'react';
import Book from './Book';

import './Books.css';

function Books({ books }) {
  return (
    <section className="books__container">
      {books.map(book => (
        <Book
          key={book.id}
          title={book.volumeInfo.title}
          image={book.volumeInfo.imageLinks?.thumbnail}
          author={book.volumeInfo.authors[0]}
          description={book.volumeInfo.description}
          published={book.volumeInfo.publishedDate}
          pages={book.volumeInfo.pageCount}
          preview={book.volumeInfo.previewLink}
          language={book.volumeInfo.language}
        />
      ))}
    </section>
  )
}

export default Books;
