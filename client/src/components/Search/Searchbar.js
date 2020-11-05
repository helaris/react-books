import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Seachbar.css';

function Searchbar({ handleChange }) {
  const [input, setInput] = useState('');
  const handlingChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleChange(input);
    setInput('');
  };

  return (
    <section>
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
        <Button onClick={handleSubmit} className="search__btn" variant="contained" color="primary" size="large">
          Search
      </Button>
      </form>
    </section>
  )
}

export default Searchbar;
