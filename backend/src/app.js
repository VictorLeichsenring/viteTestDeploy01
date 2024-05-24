// backend/src/app.js

const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;