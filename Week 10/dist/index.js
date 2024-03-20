"use strict";
// // write a function to create a users table in your database.
// import { Client } from 'pg'
// const client = new Client({
//   connectionString: 'postgresql://my-db_owner:ts0wGNiA8VFx@ep-muddy-tooth-a56dq1uo.us-east-2.aws.neon.tech/my-db?sslmode=require'
// })
// // async function createUsersTable() {
// //     await client.connect()
// //     const result = await client.query(`
// //         CREATE TABLE users (
// //             id SERIAL PRIMARY KEY,
// //             username VARCHAR(50) UNIQUE NOT NULL,
// //             email VARCHAR(255) UNIQUE NOT NULL,
// //             password VARCHAR(255) NOT NULL,
// //             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
// //         );
// //     `)
// //     console.log(result)
// // }
// // createUsersTable();
// async function insertUser() {
//     await client.connect(); // Ensure client connection is established
//     const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
//     const res = await client.query(insertQuery);
//     console.log('Insertion success:', res);
// }
// insertUser();
