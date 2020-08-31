require('dotenv').config();

export namespace Config {
    // if (process.env.DB_HOST === undefined) {
    //     throw new Error('DB_HOST must be set.');
    // }
    // if (!process.env.DB_PORT) {
    //     throw new Error('DB_PORT must be set.');
    // }
    // if (!process.env.DB_USER) {
    //     throw new Error('DB_USER must be set.');
    // }
    // if (!process.env.DB_PASSWORD) {
    //     throw new Error('DB_PASSWORD must be set.');
    // }
    // if (!process.env.DB_DATABASE_NAME) {
    //     throw new Error('DB_DATABASE_NAME must be set.');
    // }
    // if (!process.env.NODE_ENV) {
    //     throw new Error('NODE_ENV must be set.');
    // }
    // if (!process.env.SCHEMA_NAME) {
    //     throw new Error('SCHEMA_NAME must be set.');
    // }
    // if (!process.env.TZ) {
    //     throw new Error('TZ must be set.');
    // }

    // export const DB_HOST: string = process.env.DB_HOST;
    // export const DB_PORT: string = process.env.DB_PORT;
    // export const DB_USER: string = process.env.DB_USER;
    // export const DB_PASSWORD: string = process.env.DB_PASSWORD;
    // export const DB_DATABASE_NAME: string = process.env.DB_DATABASE_NAME;
    // export const NODE_ENV: string = process.env.NODE_ENV;
    // export const SCHEMA_NAME: string = process.env.SCHEMA_NAME;
    // export const TZ: string = process.env.TZ;
    export const PORT: string | undefined = process.env.PORT;
    export const FIRESTORE_ROOT_PATH: string = process.env.ROOT_PATH || 'test';
}
