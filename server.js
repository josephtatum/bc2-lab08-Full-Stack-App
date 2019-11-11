require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const pg = require('pg');

const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);
client.connect();

const app = express();
const PORT = process.env.PORT;
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('./public'));
app.use(express.json());

//Routes
app.get('/api/dannys', async (req, res) => {
    try {
        const result = await client.query(`
            SELECT
                d.*,
                p.name as profession
            FROM dannys d
            JOIN professions p
            ON   d.profession_id = p.id
            ORDER BY d.power_level;
        `);

        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({
            error: err.message || err
        });
    }

});

// reder detail page
app.get('/api/dannys/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const result = await client.query(`
            SELECT
                d.*,
                p.name as profession
            FROM dannys d
            JOIN professions p
            ON   d.profession_id = p.id
            WHERE d.id = $1
        `,
        [id]);

        const danny = result.rows[0];

        if (!danny) {
            res.status(404).json({
                error: `Danny id ${id} does not exist`
            });
        }
        else {
            res.json(danny);
        }
    }

    catch (err) {
        res.status(500).json({
            error: err.message || err
        });
    }
});

// delete a danny
app.get('api/dannys/delete/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await client.query(`
            DELETE FROM
                d.*,
                p.name as profession
            FROM dannys d
            JOIN professions p
            ON   d.profession_id = p.id
            WHERE d.id = $1
        `,
        [id]);

        const danny = result;
        
        if (!danny) {
            res.status(404).json({
                error: `Danny id ${id} does not exist`
            });
        }
        else {
            res.json(danny);
        }
    }

    catch (err) {
        res.status(500).json({
            error: err.message || err
        });
    }

});

// Post dannys
app.post('/api/dannys', async (req, res) => {
    const danny = req.body;

    try {
        const result = await client.query(`
            INSERT INTO dannys (name, profession_id, age, has_dignity, power_level)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `,
        [danny.name, danny.profession_id, danny.age, danny.has_dignity, danny.power_level]
        );

        res.json(result.rows[0]);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message || err
        });
    }
});

//Get professions
app.get('/api/professions', async (req, res) => {
    try {
        const result = await client.query(`
            SELECT *
            FROM professions
            ORDER BY name;
        `);

        res.json(result.rows);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message || err
        });
    }
});

app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});

