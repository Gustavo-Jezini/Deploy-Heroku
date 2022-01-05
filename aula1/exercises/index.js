const express = require('express');

const app =  express();

const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.send('Esta vivo!!!');
});

app.listen(PORT, () => console.log(`O pai ta on na ${PORT}`));

