const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./config/config');
require('./db/mongoose');

const app = express();

// middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
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
