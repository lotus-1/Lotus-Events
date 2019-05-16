const dbConnection = require("../database/db_connection.js");

const postUsers = (name, cb) => {
  dbConnection.query(
    "INSERT INTO users (name) VALUES ($1)",
    [name],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res);
    }
  );
};

const postEvents = (event, event_date, cb) => {
  dbConnection.query(
    "INSERT INTO events (event, event_date) VALUES ($1, $2)",
    [event, events_date],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res);
    }
  );
};

const postComments = (comment, cb) => {
  dbConnection.query(
    "INSERT INTO comments (comment) VALUES ($1)",
    [comment],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res);
    }
  );
};

module.exports = { postUsers, postEvents, postComments };
