import {defineConfig} from 'drizzle-kit'

export default defineConfig({
    schema: "./lib/database/tables.ts",
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.POSTGRES_URL!,
    },
    verbose: true,
    strict: true,
})