import { pool } from '../db';
import { iUser } from '../interfaces/index';

async function getAllUserDB(): Promise<iUser[]> {
    const client = await pool.connect();
    const sql = 'SELECT * FROM USERS';
    const result = (await client.query(sql)).rows;
    return result;
}

async function getUserIdDB(id: string): Promise<iUser[]> {
    const client = await pool.connect();
    const sql = 'SELECT * FROM USERS where id = $1';
    const result = (await client.query(sql, [id])).rows;
    return result;
}

async function createUserDB(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = 'INSERT INTO users(name, surname, email, pwd) values ($1, $2, $3, $4) returning *';
        const result = (await client.query(sql, [name, surname, email, pwd])).rows;
        await client.query('COMMIT');
        return result;
    } catch (error) {
        await client.query('ROLBACK');
        return [];
    }
}

async function upDataUserDB(id: string, name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = 'UPDATE users set name = $1, surname = $2, email = $3, pwd = $4 where id = $5 returning *';
        const result = (await client.query(sql, [name, surname, email, pwd, id])).rows;
        await client.query('COMMIT');
        return result;
    } catch (error) {
        await client.query('ROLBACK');
        return [];
    }
}

async function deleteUserByIdDB(id: string): Promise<iUser[]> {
    const client = await pool.connect();
    try {
        const sql = 'DELETE from users where id = $1 returning *';
        const result = (await client.query(sql, [id])).rows;
        return result;
    } catch (error) {
        await client.query('ROLBACK');
        return [];
    }
}

export { getAllUserDB, getUserIdDB, createUserDB, upDataUserDB, deleteUserByIdDB };