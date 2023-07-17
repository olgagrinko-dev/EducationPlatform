import { pool } from '../db';

async function getAllCourseDB() {
    const client = await pool.connect();
    const sql = 'SELECT * FROM courses';
    const result = (await client.query(sql)).rows;
    return result;
}

async function getCourseIdDB(id: string) {
    const client = await pool.connect();
    const sql = 'SELECT FROM courses where id = $1';
    const result = (await client.query(sql, [id])).rows;
    return result;
}

async function createCourseDB(course: string) {
    const client = await pool.connect();
    const sql = 'INSERT INTO courses(course) values ($1) returning *';
    const result = (await client.query(sql, [course])).rows;
    return result;
}

async function upDataCourseDB (id: string, course: string) {
    const client = await pool.connect();
    const sql = 'UPDATE courses set course = $1 where id = $2 returning *';
    const result = (await client.query(sql, [course, id])).rows;
    return result;  
}

async function deleteCourseByIdDB (id: string) {
    const client = await pool.connect();
    const sql = 'DELETE from courseswhere id = $1 returning *';
    const result = (await client.query(sql, [id])).rows;
    return result;
}

export { getAllCourseDB, getCourseIdDB, createCourseDB, upDataCourseDB, deleteCourseByIdDB };