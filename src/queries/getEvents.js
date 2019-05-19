const dbConnection = require("../database/db_connection.js");

const getUsers = cb => {
  dbConnection.query("SELECT * FROM users", (err, res) => {
    if (err) return cb(err);
    console.log("res.rows: " + res.rows);
    cb(null, res.rows);
  });
};

const getEvents = cb => {
  dbConnection.query("SELECT TOP 2 * FROM events", (err, res) => {
    if (err) return cb(err);
    console.log("res.rows: " + res.rows);
    cb(null, res.rows);
  });
};

const getComments = cb => {
  dbConnection.query("SELECT * FROM comments WHERE user_id = 1", (err, res) => {
    if (err) return cb(err);
    console.log("res.rows: " + res.rows);
    cb(null, res.rows);
  });
};
module.exports = {
  getUsers,
  getEvents,
  getComments
};
