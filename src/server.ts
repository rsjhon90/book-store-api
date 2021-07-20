import 'reflect-metadata';
import 'dotenv/config';
import app from './app';

import './database/pgConnect';

app.listen(3000, () => {
  console.log('server up on port 3000');
});
