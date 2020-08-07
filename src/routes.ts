import express, { request } from 'express';

const routes = express.Router();

routes.post('/classes', (request, response) => {
  return response.json({message: 'Hello World'});
});

export default routes;