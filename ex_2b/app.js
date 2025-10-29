const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('form');
});

app.post('/submit', (req, res) => {
  const formData = req.body;
  console.log('Received form data:', formData);

  res.render('success', { data: formData });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
