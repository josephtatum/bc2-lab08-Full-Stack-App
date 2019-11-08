require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
// import seed data:
const dannys = require('./seed-dannys.js');

run();

async function run() {
    const client = new Client(process.env.DATABASE_URL);

    try {
        await client.connect();
    
        // "Promise all" does a parallel execution of async tasks
        await Promise.all(
            // map every item in the array data
            dannys.map(danny => {

                // Use a "parameterized query" to insert the data,
                // Don't forget to "return" the client.query promise!
                return client.query(`
                    INSERT INTO dannys (name, profession, has_dignity, age, power_level)
                    VALUES ($1, $2, $3, $4, $5);
                `,
                
                [danny.name, danny.profession, danny.has_dignity, danny.age, danny.power_level]);
                
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
