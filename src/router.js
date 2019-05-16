const {
  homeHandler,
  getUsersHandler,
  publicHandler,
  errorHandler,
  createUserHandler
} = require("./handlers");

const router = (request, response) => {
  const { url } = request;

  if (url === "/") {
    homeHandler(response);
  } else if (url === "/users") {
    getUsersHandler(response);
  } else if (url.includes("public")) {
    publicHandler(url, response);
  } else if (url === "/create-user") {
    createUserHandler(response);
  } else {
    errorHandler(response);
  }
};

module.exports = router;
