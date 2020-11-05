import React from 'react';
import Book from './Book';

import './Books.css';

function Books({ books }) {
  console.log(books)
  // const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await fetch('http://localhost:5000/api/books')
  //       .then(response => response.json())
  //       .then(data => setBooks(data));
  //     return result;
  //   }
  //   fetchData();
  // }, []);

  // console.log(books)
  return (
    <section className="books__container">
      {books.map(book => (
        <Book
          key={book.id}
          title={book.volumeInfo.title}
          image={book.volumeInfo.imageLinks?.thumbnail}
          author={book.volumeInfo.authors}
          description={book.volumeInfo.description}
        />
      ))}
    </section>
  )
}

export default Books;
