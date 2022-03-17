const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('public'));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/html/index.html'))
});

app.get('/public/html/character_list.html', (req, res) => {
  res.sendFile(path.join(__dirname, './character_list.html'))
});

app.get('/public/html/navbar.html', (req, res) => {
  res.sendFile(path.join(__dirname, './navbar.html'))
});

app.get('/public/html/weapon_list.html', (req, res) => {
  res.sendFile(path.join(__dirname, './weapon_list.html'))
});

app.listen(port, () => {
  console.log(`Genshin Wiki listening on port ${port}!`)
});