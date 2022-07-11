//uses pg library to configure connection to database.
const Pool = require('pg').Pool;

//instance the pool
const pool = new Pool({
    user: 'artope',
    host: 'localhost',
    port: 5432,
    database: 'perntodo'
});

//exports the instance
module.exports = pool;