const dbConnection = require("../db_connection.js");

const getUsers = cb => {
  dbConnection.query("SELECT * FROM users", (err, res) => {
    if (err) return cb(err);
    console.log("res.rows: " + res.rows);
    cb(null, res.rows);
  });
};

const getEvents = cb => {
  dbConnection.query("SELECT * FROM events", (err, res) => {
    if (err) return cb(err);
    console.log("res.rows: " + res.rows);
    cb(null, res.rows);
  });
};

const getComments = cb => {
  dbConnection.query("SELECT * FROM comments", (err, res) => {
    if (err) return cb(err);
    console.log("res.rows: " + res.rows);
    cb(null, res.rows);
  });
};

const getSign = cb => {
  dbConnection.query("SELECT * FROM sign", (err, res) => {
    if (err) return cb(err);
    console.log("res.rows: " + res.rows);
    cb(null, res.rows);
  });
};

module.exports = {
  getUsers,
  getEvents,
  getComments,
  getSign
};
