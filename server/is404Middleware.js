const { routes } = require('../src/router/routes');
const path = require('path');

module.exports = (req, res, next) => {
    if (
        !routes.map(route => route.path).includes(req.originalUrl) &&
        req.method === 'GET' &&
        req.accepts('text/html') &&
        req.originalUrl.indexOf('.') === -1
    ) {
        return res.status(404).sendFile(path.resolve('public/404.html'));
    }

    next();
};
