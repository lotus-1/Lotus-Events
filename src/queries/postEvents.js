const dbConnection = require("../database/db_connection.js");

const postData = (name, events ,events_date, comment, cb) => {
  dbConnection.query(
    "INSERT INTO users (name) VALUES ($1)",
    [name],
    "INSERT INTO events (event, event_date) VALUES ($1, $2)",
    [events, events_date],
    "INSERT INTO comments (comment) VALUES ($1)",
    [comment],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res);
    }
  );
};

// const postEvents = (event, event_date, cb) => {
//   dbConnection.query(
//     "INSERT INTO events (event, event_date) VALUES ($1, $2)",
//     [event, events_date],
//     (err, res) => {
//       if (err) return cb(err);
//       cb(null, res);
//     }
//   );
// };
//
// const postComments = (comment, cb) => {
//   dbConnection.query(
//     "INSERT INTO comments (comment) VALUES ($1)",
//     [comment],
//     (err, res) => {
//       if (err) return cb(err);
//       cb(null, res);
//     }
//   );
// };

module.exports = postData;
