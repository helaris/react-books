import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import './Seachbar.css';

function Searchbar({ handleChange }) {
  const [input, setInput] = useState('');
  const handlingChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    setInput('')
    handleSubmit()
  }, [])

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    handleChange(input);
    setInput('');
  };

  return (
    <section className="searchbar__container">
      <h1 className="search__heading">Search for any book you like</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          width="75%"
          id="outlined-search"
          label="Search field"
          variant="outlined"
          className="input"
          type="text"
          value={input}
          onChange={handlingChange}
        />
        <button onClick={handleSubmit} className="search__btn">Search</button>
      </form>
    </section>
  )
}

export default Searchbar;
