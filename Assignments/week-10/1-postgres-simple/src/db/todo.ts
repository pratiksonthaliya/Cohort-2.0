import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    const insertUserQuery = `
        INSERT INTO todos (userId, title, description) VALUES ($1, $2, $3) returning *;`
    const res = await client.query(insertUserQuery, [userId, title, description]);
    console.log(res);
    return res;
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    const updateTodoQuery = `UPDATE todos SET done = 'true' where id = $1 returning *`
    const res = await client.query(updateTodoQuery, [todoId]);
    console.log(res);
    return res;
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    const getTodoQuery = `SELECT title, description, done, id from todos where user_id = $1 returning *`
    const res = await client.query(getTodoQuery, [userId]);
    console.log(res);
    return res;
}