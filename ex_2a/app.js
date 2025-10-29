const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const data = {
    title: 'EJS Page',
    message: 'Hello from the server!',
    items: ['Apple', 'Banana', 'Cherry']
  };
  
  res.render('index', data);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
