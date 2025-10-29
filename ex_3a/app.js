const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

app.use(cookieParser()); 
app.use(session({
  secret: 'a-very-strong-secret-key', 
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));

app.get('/', (req, res) => {
  let responseHtml = '<h1>Session and Cookie Demo</h1>';

  if (req.session.page_views) {
    req.session.page_views++;
    responseHtml += `<p>You have visited this page ${req.session.page_views} times in this session.</p>`;
  } else {
    req.session.page_views = 1;
    responseHtml += '<p>Welcome! This is your first visit in this session.</p>';
  }

  if (req.cookies.username) {
    responseHtml += `<p>Found a cookie! Username: <strong>${req.cookies.username}</strong></p>`;
  } else {
    responseHtml += '<p>No username cookie found.</p>';
  }
  
  responseHtml += `
    <a href="/login">Login (Set Cookie)</a> | 
    <a href="/logout">Logout (Clear Session & Cookie)</a>
  `;
  res.send(responseHtml);
});

app.get('/login', (req, res) => {
  res.cookie('username', 'testuser', { maxAge: 60000, httpOnly: true });
  
  req.session.loggedIn = true;
  
  console.log('User logged in, cookie and session set.');
  res.redirect('/');
});

app.get('/logout', (req, res) => {
  res.clearCookie('username'); 
  
  req.session.destroy(err => {
    if (err) {
      return console.log(err);
    }
    console.log('Session and cookie cleared.');
    res.redirect('/');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
