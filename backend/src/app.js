const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello World from backend!');
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
