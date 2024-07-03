import {drizzle} from 'drizzle-orm/postgres-js';
import * as schema from './tables';
import postgres from "postgres";

const client = postgres(process.env.POSTGRES_URL!, {prepare: false})

export const db = drizzle(client, {schema});
