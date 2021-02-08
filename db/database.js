const mysql2 = require('mysql2');

// Connect to database
const db = mysql2('./db/tracker.db', err => {
    if (err) {
        return console.error(err.message);
    }

    console.log('Connected to the tracker database');
});

module.exports = db;