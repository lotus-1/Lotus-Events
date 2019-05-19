const fs = require("fs");
const dbConnection = require("./db_connection");

if (!process.env.DB_URL)
  throw new ERROR("Environment variable DB_URL must be set!");

const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

const runDBbuild = dbConnection.query(sql, (err, res) => {
  if (err) throw err;
  console.log("Events table created with result: ", res);
});

module.exports = runDBbuild;
