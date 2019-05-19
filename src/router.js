const {
  homeHandler,
  getEventsHandler,
  postEventsHandler,
  publicHandler,
  errorHandler
} = require("./handlers");

const router = (request, response) => {
  const { url } = request;

  if (request.url === "/") {
    homeHandler(response);
  } else if (request.url.indexOf("/add-event") !== -1) {
    postEventsHandler(request, response);
  } else if (request.url.indexOf("/public") !== -1) {
    publicHandler(url, response);
  } else if (request.url.indexOf("/events") !== -1) {
    getEventsHandler(response);
  } else {
    errorHandler(response);
  }
};

module.exports = router;
