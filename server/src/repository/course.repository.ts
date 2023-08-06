import { pool } from '../db';
import { iCourse } from '../interfaces';

async function getAllCourseDB(): Promise<iCourse[]> {
    const client = await pool.connect();
    const sql = 'SELECT * FROM courses';
    const result = (await client.query(sql)).rows;
    return result;
}

async function getCourseIdDB(id: string): Promise<iCourse[]> {
    const client = await pool.connect();
    const sql = 'SELECT * FROM courses where id = $1';
    const result = (await client.query(sql, [id])).rows;
    return result;
}

async function createCourseDB(course: string): Promise<iCourse[]> {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = 'INSERT INTO courses(course) values ($1) returning *';
        const result = (await client.query(sql, [course])).rows;
        await client.query('COMMIT');
        return result;
    } catch (error) {
        await client.query('ROLBACK');
        return [];
    }
}

async function upDataCourseDB(id: string, course: string): Promise<iCourse[]> {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = 'UPDATE courses set course = $1 where id = $2 returning *';
        const result = (await client.query(sql, [course, id])).rows;
        await client.query('COMMIT');
        return result;
    } catch (error) {
        await client.query('ROLBACK');
        return [];
    }
}

async function deleteCourseByIdDB(id: string): Promise<iCourse[]> {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = 'DELETE from courses where id = $1 returning *';
        const result = (await client.query(sql, [id])).rows;
        await client.query('COMMIT');
        return result;
    } catch (error) {
        await client.query('ROLBACK');
        return [];
    }
}

export { getAllCourseDB, getCourseIdDB, createCourseDB, upDataCourseDB, deleteCourseByIdDB };