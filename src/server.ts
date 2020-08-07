import express from 'express';

const app = express();

app.use(express.json())

app.get('/users', (request, response) => {
  const users = [
    { user: 'Carlos'}
  ];

  return response.json(users);
  console.warn('Access')
});

app.listen(3333)