const express = require('express');
const serveStatic = require('serve-static');
const enforce = require('express-sslify');
const compression = require('compression');
const history = require('connect-history-api-fallback');

const app = express();
const port = process.env.PORT || 5000;

app.use(history());
app.use(compression());
app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(serveStatic(__dirname + '/dist'));
app.listen(port);

console.log(`Server is listening on port ${port}`);
