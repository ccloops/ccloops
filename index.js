const express = require('express');
require('dotenv').config();

express()
  .use(express.static(`${__dirname}/build`))
  .get('*', (req, res) => res.sendFile(`${__dirname}/build/index.html`))
  .listen(process.env.PORT, () =>
    console.log('__SERVER_RUNNING__', process.env.PORT));