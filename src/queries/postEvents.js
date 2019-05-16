const dbConnection = require('../database/db_connection.js');

const postEvents = (name, events, comments, cb) => {
  dbConnection.query(
    'INSERT INTO users (name, events, comments) VALUES ($1, $2)',
    [name, events, comments],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res);
    }
  );
};

module.exports = postEvents;
