const express = require('express');
const serveStatic = require('serve-static');
const enforce = require('express-sslify');
const compression = require('compression');
const is404Middleware = require('./is404Middleware');

const app = express();
const port = process.env.PORT || 5000;
const isProduction = process.env.NODE_ENV === 'production';

// Custom middleware to re-enable 404
app.use(is404Middleware);

app.use(compression());

if (isProduction) {
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

app.use(serveStatic(__dirname + '/../dist'));

app.listen(port);

console.log(`Server is listening on port ${port}`);
