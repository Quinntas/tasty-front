import pg from 'pg';
import {drizzle} from 'drizzle-orm/node-postgres';
import * as schema from './tables';

const pool = new pg.Pool({
    connectionString: process.env.POSTGRES_URL,
});

export const db = drizzle(pool, {schema});
