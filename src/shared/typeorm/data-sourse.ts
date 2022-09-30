import { DataSource } from "typeorm";

export const AppDataSourse = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "docker",
    database: "dentallite",
})
