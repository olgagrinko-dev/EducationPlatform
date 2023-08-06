import { pool } from '../db';

async function createUserDB(name, surname, email, pwd) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = 'insert into users (name, surname, email, pwd) values ($1, $2, $3, $4) returning *';
        const result = (await client.query(sql, [name, surname, email, pwd])).rows;
        await client.query('COMMIT');
        return result;
    } catch (error) {
        await client.query('ROLLBACK');
        return [];
    }
}

async function getUserByEmailDB(email) {
    const client = await pool.connect();
    const sql = 'select * from users where email = $1';
    const result = (await client.query(sql, [email])).rows;
    return result;
}

export { createUserDB, getUserByEmailDB };