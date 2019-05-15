const http = require('http');
const handler = require('./handlers.js');

const server = http.createServer(handler);
const port = process.env.PORT || 3000;

const startServer = () => {
  server.listen(port, () => {
    console.log(`Magic happens on port ${port}`);
  });
}

startServer();
