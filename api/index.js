const express = require('express');

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('API rodando na porta 3000'));

module.exports = app;