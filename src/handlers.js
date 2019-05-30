const { readFile } = require('fs');
const path = require('path');
const qs = require('query-string');

const { getUsers, getEvents, getComments } = require('./queries/getEvents');
const { postUsers, postEvents, postComments } = require('./queries/postEvents');
// const postData = require('./queries/postEvents');
const serverError = (err, response) => {
  response.writeHead(401, 'Content-Type:text/html');
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
  let data = [];
 getUsers((err, users) => {
   data.push(users);
    getEvents((err, events) => {
      data.push(events);
      getComments((err, comments) => {
        data.push(comments);
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(data));
      });
    });
  });
};

// const postEventsHandler = (request, response) => {
//   let data = '';
//   request.on('data', chunk => {
//     data += chunk;
//   });
//   request.on('end', () => {
//     const { name, events, event_date, comments } = qs.parse(data);
//     postData(name, events ,event_date, comments, (err, rows) => {
//       if (err) return serverError(err, response);
//       response.writeHead(302, { 'Location': '/' });
//       response.end()
//       console.log(postEventsHandler);
//     });
//   });
// };
const postEventsHandler = (request, response) => {
  let data = '';
  request.on('data', chunk => {
    data += chunk;
  });
  request.on('end', () => {
    const parsedData= qs.parse(data);
    console.log(`This is the data parsed ${JSON.stringify(parsedData)}`);
    const parseName = qs.parse(data).user;
    console.log(`This is the parse name ${parseName}`);
    const parseEvents = qs.parse(data).event;
    console.log(`This is the parse events ${parseEvents}`);
    const parseDate = qs.parse(data).date;
    console.log(`This is the parse date ${parseDate}`);
    const parseComment = qs.parse(data).comment;
    console.log(`This is the parse comment ${parseComment}`);

    const  { user, events, event_date, comment } = qs.parse(data);

    postUsers(parseName, (err, rows) => {
      if (err) return serverError(err, response);
      // const { events, event_date } = qs.parse(data);
      postEvents(parseEvents, parseDate, (err, rows) => {
        if (err) return serverError(err, response);
        // const { comment } = qs.parse(data);
        postComments(parseComment, (err, rows) => {
          if (err) return serverError(err, response);
          response.writeHead(302, { 'Location': '/' });
          response.end(parseName, parseDate, parseEvents, parseComment);
        })
      })
    }

  );
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
