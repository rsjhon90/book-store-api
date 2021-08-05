import { createConnection } from 'typeorm';

createConnection()
  .then()
  .catch((err) => {
    console.error('Unable to connect to the database: ', err);
  });
