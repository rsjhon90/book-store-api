import request from 'supertest';
import app from '../app';

test('it should be ok', async () => {
  const response = await request(app).get('/');

  expect(response.body).toEqual({ message: 'Hello World' });
});
