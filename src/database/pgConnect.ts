import { createConnection } from 'typeorm';

createConnection()
  .then(() => {
    console.log('Database connection has been established successfully');
  })
  .catch((err) => {
    console.error('Unable to connect to the database: ', err);
  });
