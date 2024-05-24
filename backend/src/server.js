// backend/src/server.js

const app = require('./app');

// não remova a variável `PORT` ou o `listen`
const port = process.env.PORT || 3001;

app.listen(port, () => console.log('ouvindo porta', port));