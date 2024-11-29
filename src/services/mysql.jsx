import mysql from "mysql2/promise";

const mysqlPool = mysql.createPool({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    port: process.env.SQL_PORT,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DB
});

export default mysqlPool;