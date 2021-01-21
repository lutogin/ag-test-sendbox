const express = require('express');
const users = require('./users.json');

const app = new express();

// создаем парсер для данных в формате json
const jsonParser = express.json();

// настройка CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
  next();  // передаем обработку запроса далее
});

app.get('/users', (req, res) => {
  res.send(users.users);
});

app.listen(3000, () => {
  console.log('Server listen 3000 port');
});
