import React, { useState } from 'react';
import Header from './components/Header/Header';
// import About from './components/About/About';
import Searchbar from './components/Search/Searchbar';
import Books from './components/Books/Books';
import { booksFetcher } from './utils/fetchers';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  const handleChange = (e) => {
    booksFetcher(e).then((res) => {
      setBooks(res);
    });
  }

  return (
    <div className="App">
      <Header />
      {/* <About /> */}
      <Searchbar handleChange={handleChange} />
      <Books books={books} />
    </div>
  );
}


export default App;
