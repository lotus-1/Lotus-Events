const {
  homeHandler,
  getEventsHandler,
  postEventsHandler,
  publicHandler,
  loginHandler,
  registerHandler,
  errorHandler
} = require("./handlers");

const router = (request, response) => {
  const { url } = request;

  if (request.url === "/") {
    loginHandler(request, response);
  } else if (request.url.indexOf("/login") !== -1) {
    homeHandler(response);
  } else if (request.url.indexOf("/add-event") !== -1) {
    postEventsHandler(request, response);
  } else if (request.url.indexOf("/public") !== -1) {
    publicHandler(url, response);
  } else if (request.url.indexOf("/events") !== -1) {
    getEventsHandler(response);
  } else if (request.url.indexOf("/register") !== -1) {
    registerHandler(request, response);
  } else {
    errorHandler(response);
  }
};

module.exports = router;
