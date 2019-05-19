const dbConnection = require("../database/db_connection.js");


// const getData = (users, events, comments, cb) => {
//   dbConnection.query("SELECT * FROM users", (err, res) => {
//   if (err) return cb(err);
//   console.log("res.rows: " + res.rows);
//   cb(null, res.rows);
// });
// dbConnection.query("SELECT * FROM events", (err, res) => {
//   if (err) return cb(err);
//   console.log("res.rows: " + res.rows);
//   cb(null, res.rows);
// });
// dbConnection.query("SELECT * FROM comments", (err, res) => {
//   if (err) return cb(err);
//   console.log("res.rows: " + res.rows);
//   cb(null, res.rows);
// });
// };
// module.exports = getData;
// *************************************************************

const getUsers = cb => {
  // dbConnection.query("SELECT * FROM events WHERE name = $1",
  // ['Mynah'], (err, res) => {
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
module.exports = {
  getUsers,
  getEvents,
  getComments
};
