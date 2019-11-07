// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const express = require('express');

// (add cors, pg, and morgan...)
const cors = require('cors');
const morgan = require('morgan');
const pg = require('pg');

// Database Client
// (create and connect using DATABASE_URL)
const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);
client.connect();


// Application Setup
const app = express();
const PORT = process.env.PORT;
// (add middleware utils: logging, cors, static files from public)
// app.use(...)
app.use(cors());
app.use(express.static('./public'));
app.use(morgan('dev'));
// API Routes
app.get('/api/dannys', async (req, res) => {
    try {
        const result = await client.query(`
            SELECT
                id,
                name,
                age,
                profession,
                has_dignity as "hasDignity",
                power_level as "powerLevel"
            FROM DANNYS;
        `);

        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({
            error: err.message || err
        });
    }

});
// http method and path...


// Start the server
// (use PORT from .env!)

app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});