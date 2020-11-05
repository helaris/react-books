import React, { useState } from 'react'

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
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        value={input}
        onChange={handlingChange}
      />
      <button onClick={handleSubmit}>Search</button>
    </form>
  )
}

export default Searchbar;
