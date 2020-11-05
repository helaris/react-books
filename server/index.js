const express = require('express');
require('dotenv').config({ path: './.env' });
const cors = require('cors');
const api_helper = require('./api_helpers');
const app = express();

const API_KEY = process.env.API_KEY;

app.use(cors());

app.get('/api/books', (req, res) => {
  api_helper.make_API_call(`https://www.googleapis.com/books/v1/volumes?q=popular&key=${API_KEY}&maxResults=16`)
    .then(response => {
      res.json(response.items)
    })
    .catch(error => {
      res.send(error)
    })
});

app.get('/api/books/:query', (req, res) => {
  const query = req.params.query;

  api_helper.make_API_call(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}&maxResults=16`)
    .then(response => {
      res.json(response.items)
    })
    .catch(error => {
      res.send(error)
    })
});

// app.get('api/books/:query', async (req, res) => {
//   const query = req.params.query;
//   const response = await fetch(
//     `https://www.googleapis.com/books/v1/volumes?q=${query}=${API_KEY}&maxResults=16`
//   );

//   const books = await response.json();

//   res.json(books.items);
// });

app.listen(5000, (console.log(`Server is running on port 5000...`)));
