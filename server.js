const express = require('express');
const serveStatic = require('serve-static');
const enforce = require('express-sslify');

const app = express();
const port = process.env.PORT || 5000;

app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(serveStatic(__dirname + '/dist'));
app.listen(port);

console.log(`Server is listening on port ${port}`);
