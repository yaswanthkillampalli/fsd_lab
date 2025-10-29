const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Routing Examples</h1>
    <ul>
      <li><a href="/users/42">Route Parameter Example (/users/42)</a></li>
      <li><a href="/search?term=express&order=top">Query Parameter Example (/search?term=express)</a></li>
    </ul>
  `);
});

app.get('/users/:id', (req, res) => {
  res.send(`<h1>User Profile</h1><p>Viewing profile for User ID: <strong>${req.params.id}</strong></p>`);
});

app.get('/search', (req, res) => {
  const { term = 'not provided', order = 'default' } = req.query;
  res.send(`<h1>Search Results</h1><p>Search Term: <strong>${term}</strong></p><p>Order: <strong>${order}</strong></p>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
