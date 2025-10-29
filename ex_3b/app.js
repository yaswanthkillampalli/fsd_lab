const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;
const JWT_SECRET = 'your-super-secret-key-for-jwt';

app.use(express.json());

const users = [];

app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ msg: 'All fields required.' });
    if (users.find(u => u.username === username)) return res.status(409).json({ msg: 'Username exists.' });

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.status(201).json({ msg: 'User registered.' });
  } catch (e) {
    res.status(500).json({ msg: 'Server error.' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ msg: 'Invalid credentials.' });
    }
    const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (e) {
    res.status(500).json({ msg: 'Server error.' });
  }
});

const auth = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied.' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ msg: 'Token is not valid.' });
    req.user = user;
    next();
  });
};

app.get('/profile', auth, (req, res) => {
  res.json({ msg: `Welcome ${req.user.username}!`, user: req.user });
});

app.listen(PORT, () => console.log(`JWT Auth API server running on http://localhost:${PORT}`));
