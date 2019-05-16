const dbConnection = require("../database/db_connection.js");

const getEvents = cb => {
  dbConnection.query("SELECT * FROM events", (err, res) => {
    if (err) return cb(err);
    console.log("res.rows: " + res.rows);
    cb(null, res.rows);
  });
};

module.exports = getEvents;
