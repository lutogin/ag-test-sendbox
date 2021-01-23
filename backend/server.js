const express = require('express');
const bodyParser = require('body-parser');
const users = require('./users.json');

const app = new express();

// настройка CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
  next();  // передаем обработку запроса далее
});

app.use(bodyParser.json());


app.get('/users', (req, res) => {
  res.send(users.users);
});

app.post('/users', (req, res) => {
  console.log('headers ---> ', req.headers?.authorization);
  res.send(users.users);
});

app.post('/sum', ((req, res) => {
  console.log('headers ---> ', req.headers?.authorization);
  const numbers = req.body;
  res.send({ result: numbers.reduce((acc, el) => acc + Number(el), 0) });
}));

app.listen(3000, () => {
  console.log('Server listen 3000 port');
});
