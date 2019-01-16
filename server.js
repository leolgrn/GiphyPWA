const express = require('express');
const serveStatic = require('serve-static');

const app = express();
const port = process.env.PORT || 5000;

app.use(serveStatic(__dirname + '/dist'));
app.listen(port);

console.log(`Server is listening on port ${port}`);
