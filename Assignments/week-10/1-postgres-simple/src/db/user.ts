import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    const insertUserQuery = `
        INSERT INTO users (username, password, name) VALUES ($1, $2, $3);`
    const res = await client.query(insertUserQuery, [username, password, name]);
    return res;
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    const getUserQuery = `SELECT username, password, name from users`
    const res = await client.query(getUserQuery);
    return res;
}
