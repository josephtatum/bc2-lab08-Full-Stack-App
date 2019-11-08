require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
const dannys = require('./seed-dannys.js');
const professions = require('./professions');

run();

async function run() {
    const client = new Client(process.env.DATABASE_URL);

    try {
        await client.connect();

        const savedProfessions = await Promise.all(
            professions.map(async profession => {
                const result = await client.query(`
                    INSERT INTO professions (name)
                    VALUES ($1)
                    RETURNING *;
                `,
                [profession]);

                return result.rows[0];
            })
        );

        await Promise.all(
            dannys.map(danny => {
                const profession = savedProfessions.find(profession => {
                    return profession.name === danny.profession;
                });

                return client.query(`
                    INSERT INTO dannys (name, profession_id, has_dignity, age, power_level)
                    VALUES ($1, $2, $3, $4, $5);
                `,
                // uncertain here about profession.id
                [danny.name, profession.id, danny.has_dignity, danny.age, danny.power_level]);
            })
        );

        console.log('seed data load complete');
    }
    catch (err) {
        console.log(err);
    }
    finally {
        client.end();
    }
    
}
