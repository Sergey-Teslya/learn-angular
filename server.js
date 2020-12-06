const express = require('express');

const app = express();

app.use(express.static('./dist/learn-angular'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/learn-angular/'}),
);

app.listen(process.env.PORT || 4000);
