const { readFile } = require("fs");
const path = require("path");
const qs = require("query-string");

const { parse } = require("cookie");
const { sign, verify } = require("jsonwebtoken");

const SECRET = "saharmaha";

const userDetails = { userId: 5, role: "admin" };

const notFoundPage = '<p style="font-size: 10vh; text-align: center;">404!</p>';

const { getUsers, getEvents, getComments } = require("./queries/getEvents");
const { postUsers, postEvents, postComments } = require("./queries/postEvents");
const serverError = (err, response) => {
  response.writeHead(401, "Content-Type:text/html");
  response.end("<h1>Sorry, there was a problem loading the homepage</h1>");
  console.log(err);
};

const homeHandler = response => {
  const filepath = path.join(__dirname, "..", "public", "index.html");
  readFile(filepath, (err, file) => {
    if (err) return serverError(err, response);
    response.writeHead(200, { "Content-Type": "text/html" });
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
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify(data));
      });
    });
  });
};
const postEventsHandler = (request, response) => {
  let data = "";
  request.on("data", chunk => {
    data += chunk;
  });
  request.on("end", () => {
    const parsedData = qs.parse(data);
    console.log(`This is the data parsed ${JSON.stringify(parsedData)}`);
    const parseName = qs.parse(data).user;
    console.log(`This is the parse name ${parseName}`);
    const parseEvents = qs.parse(data).event;
    console.log(`This is the parse events ${parseEvents}`);
    const parseDate = qs.parse(data).date;
    console.log(`This is the parse date ${parseDate}`);
    const parseComment = qs.parse(data).comment;
    console.log(`This is the parse comment ${parseComment}`);

    const { user, events, event_date, comment } = qs.parse(data);

    postUsers(parseName, (err, rows) => {
      if (err) return serverError(err, response);
      // const { events, event_date } = qs.parse(data);
      postEvents(parseEvents, parseDate, (err, rows) => {
        if (err) return serverError(err, response);
        // const { comment } = qs.parse(data);
        postComments(parseComment, (err, rows) => {
          if (err) return serverError(err, response);
          response.writeHead(302, { Location: "/" });
          response.end(parseName, parseDate, parseEvents, parseComment);
        });
      });
    });
  });
};

const publicHandler = (url, response) => {
  const filepath = path.join(__dirname, "..", url);
  readFile(filepath, (err, file) => {
    if (err) return serverError(err, response);
    const [, extension] = url.split(".");
    const extensionType = {
      html: "text/html",
      css: "text/css",
      js: "application/javascript"
    };
    response.writeHead(200, { "content-type": extensionType[extension] });
    response.end(file);
  });
};
const errorHandler = response => {
  response.writeHead(404, { "content-type": "text/html" });
  response.end("<h1>404 Page Requested Cannot be Found</h1>");
};

const loginHandler = (req, res) => {
  switch (`${req.method} ${req.url}`) {
    case "GET /":
      return readFile("./index.html", (err, data) => {
        res.writeHead(200, {
          "Content-Type": "text/html",
          "Content-Length": data.length
        });
        return res.end(data);
      });
    case "POST /login":
      const cookie = sign(userDetails, SECRET);
      res.writeHead(302, {
        Location: "/",
        "Set-Cookie": `jwt=${cookie}; HttpOnly`
      });
      return res.end();
    case "POST /logout":
      res.writeHead(302, {
        Location: "/",
        "Set-Cookie": "jwt=0; Max-Age=0"
      });
      return res.end();
    default:
      res.writeHead(404, {
        "Content-Type": "text/html",
        "Content-Length": notFoundPage.length
      });
      return res.end(notFoundPage);
  }
};
module.exports = {
  homeHandler,
  getEventsHandler,
  postEventsHandler,
  publicHandler,
  loginHandler,
  errorHandler
};
