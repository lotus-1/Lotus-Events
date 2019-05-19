const dbConnection = require("../database/db_connection.js");

const getUsers = cb => {
  dbConnection.query("SELECT * FROM events WHERE name = Mynah", (err, res) => {
    if (err) return cb(err);
    console.log("res.rows: " + res.rows);
    cb(null, res.rows);
  });
};

const getEvents = cb => {
  dbConnection.query("SELECT * FROM events WHERE event_date LIKE '30.5.2019'", (err, res) => {
    if (err) return cb(err);
    console.log("res.rows: " + res.rows);
    cb(null, res.rows);
  });
};

const getComments = cb => {
  dbConnection.query("SELECT * FROM comments WHERE id_events = 1", (err, res) => {
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
