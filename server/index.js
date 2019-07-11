import express from 'express';
import { urlencoded, json } from 'body-parser';
import cors from 'cors';

import './config/config';
import './db/mongoose';

// routes
import usersRoutes from './routes/users';

const app = express();

// middleware
app.use(
  urlencoded({
    extended: false
  })
);
app.use(json());
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE']
  })
);

// routes
app.use('/api/users', usersRoutes)

// server
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
