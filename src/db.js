const Pool = require("pg").Pool;

// const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
const connectionString = `postgresql://postgres:mysecretpassword@localhost:5432/postgres`;

console.log(connectionString)
const pool = new Pool({
  connectionString,
});

module.exports = {
  pool,
};
