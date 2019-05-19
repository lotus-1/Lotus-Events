const { readFile } = require('fs');
const path = require('path');
const qs = require('query-string');

const { getUsers, getEvents, getComments } = require('./queries/getEvents');
// const getData = require('./queries/getEvents');
const { postUsers, postEvents, postComments } = require('./queries/postEvents');

const serverError = (err, response) => {
  response.writeHead(500, 'Content-Type:text/html');
  response.end('<h1>Sorry, there was a problem loading the homepage</h1>');
  console.log(err);
};

const homeHandler = response => {
  const filepath = path.join(__dirname, '..', 'public', 'index.html');
  readFile(filepath, (err, file) => {
    if (err) return serverError(err, response);
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(file);
  });
};

const getEventsHandler = response => {
  getUsers((err, events) => {
    if (err) return serverError(err, response);
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(events));
  });
  getEvents((err, events) => {
    if (err) return serverError(err, response);
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(events));
  });

getComments((err, events) => {
  if (err) return serverError(err, response);
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify(events));
});
};

// const getEventsHandler = response => {
//   getData((err, events) => {
//     if (err) return serverError(err, response);
//     response.writeHead(200, { 'Content-Type': 'application/json' });
//     response.end(JSON.stringify(events));
//   });

// }

const postEventsHandler = (request, response) => {
  let data = '';
  request.on('data', chunk => {
    data += chunk;
  });
  request.on('end', () => {
    const { name, events, comments } = qs.parse(data);
    postData(name, events ,events_date, comment, cb, err => {
      if (err) return serverError(err, response);
      response.writeHead(302, { 'Location': '/' });
      response.end()
    });
  });
};

const publicHandler = (url, response) => {
  const filepath = path.join(__dirname, '..', url);
  readFile(filepath, (err, file) => {
    if (err) return serverError(err, response);
    const [, extension] = url.split('.');
    const extensionType = {
      html: 'text/html',
      css: 'text/css',
      js: 'application/javascript',
      // ico: 'image/x-icon'
    };
    response.writeHead(200, { 'content-type': extensionType[extension] });
    response.end(file);
  });
};
const errorHandler = response => {
  response.writeHead(404, { 'content-type': 'text/html' });
  response.end('<h1>404 Page Requested Cannot be Found</h1>');
};

module.exports = {
  homeHandler,
  getEventsHandler,
  postEventsHandler,
  publicHandler,
  errorHandler
};
