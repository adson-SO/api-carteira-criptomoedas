const express = require('express');
const router = require('./routes');

const app = express();

app.use(express.json());

router(app);

app.listen(3000, () => console.log('API rodando na porta 3000'));

module.exports = app;