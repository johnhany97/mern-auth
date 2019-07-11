import express from 'express';
import { urlencoded, json } from 'body-parser';
import cors from 'cors';

import './config/config';
import ('./db/mongoose');

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

// server
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
