const server = require('./server');

const routes = require('./routes/routes.js');
server.use('/', routes);
