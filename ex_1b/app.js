const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let items = [
  { id: 1, name: 'Laptop' },
  { id: 2, name: 'Keyboard' },
  { id: 3, name: 'Mouse' }
];
let nextId = 4;

app.post('/items', (req, res) => {
  const itemName = req.body.name;

  if (!itemName) {
    return res.status(400).json({ error: 'Item name is required' });
  }

  const newItem = {
    id: nextId++,
    name: itemName
  };

  items.push(newItem);
  console.log('Accepted new item:', newItem);
  
  res.status(201).json(newItem);
});

app.get('/items', (req, res) => {
  console.log('Retrieving all items.');
  res.json(items);
});

app.get('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  const item = items.find(i => i.id === itemId);

  if (item) {
    console.log(`Retrieving item with ID: ${itemId}`);
    res.json(item);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

app.delete('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  const itemIndex = items.findIndex(i => i.id === itemId);

  if (itemIndex !== -1) {
    const deletedItem = items.splice(itemIndex, 1);
    console.log('Deleted item:', deletedItem);
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
