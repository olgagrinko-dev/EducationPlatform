import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    password: 'pozdeeva1709)',
    port: 5432,
    database: 'EducationPlatform',
    host: 'localhost',
})

export { pool }