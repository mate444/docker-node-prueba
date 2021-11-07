const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Hello Docker!'
  });
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening at http://localhost:${port}`));
