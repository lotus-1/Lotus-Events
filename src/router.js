const {
  homeHandler,
  getEventsHandler,
  postEventsHandler,
  publicHandler,
  errorHandler
} = require("./handlers");

const router = (request, response) => {
  const { url } = request;

  if (url === "/") {
    homeHandler(response);
  } else if (url === "/add-event") {
    getEventsHandler(response);
  } else if (url.includes("public")) {
    publicHandler(url, response);
  } else if (url === "/post-event") {
    postEvents(response);
  } else {
    errorHandler(response);
  }
};

module.exports = router;
