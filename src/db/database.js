import mysql from "mysql2/promise"

import config from "./../config.js"

const pool = mysql.createPool({
    host : config.host,
    database : config.database,
    user : config.user,
    password : config.password,
    port: config.port
})

const getConnection = () =>{
    return pool
}

export default getConnection;