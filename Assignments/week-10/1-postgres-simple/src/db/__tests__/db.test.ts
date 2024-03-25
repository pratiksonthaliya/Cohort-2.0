import { client } from '../..';
import { createUser, getUser } from '../user';
import { createTables, dropTables } from '../setup';
import { createTodo, updateTodo, getTodos } from '../todo';

beforeAll(async () => {
    await client.connect();
    await dropTables();
    await createTables();
});

afterAll(async () => {
    await client.end();
});

describe('User Database Operations', () => {
    test('createUser inserts a new user into the database', async () => {
        const username = 'testuser';
        const password = 'testpass';
        const name = 'Test User';

        await createUser(username, password, name);
        const user = await client.query('SELECT * FROM users WHERE username = $1', [username]);
        expect(user.rows[0]).toHaveProperty('username', username);
        expect(user.rows[0]).toHaveProperty('name', name);
        expect(user.rows[0].password).toBe(password);
    });

    test('getUser retrieves a user by ID', async () => {
        // Assuming an existing user with ID 1 for this test
        const userId = 1;
        const user = await getUser(userId);

        expect(user).toHaveProperty('id', userId);
        expect(user).toHaveProperty('username');
        expect(user).toHaveProperty('name');
    });
});


describe('Todo Operations', () => {
    let userId: number;
  
    beforeAll(async () => {
      // Assuming you have a function to get a user by username for test setup
      const res = await client.query('SELECT id FROM users WHERE username = $1', ['testuser']);
      userId = res.rows[0].id;
    });
  
    test('createTodo inserts a new todo for a user', async () => {
      const title = 'Test Todo';
      const description = 'Test Description';
      // const todo = await createTodo(userId, title, description);
  
      await createTodo(userId, title, description);
      const todo = await client.query('SELECT * FROM todos WHERE userId = $1', [userId]);
      // expect(user.rows[0]).toHaveProperty('username', username);
      // expect(user.rows[0]).toHaveProperty('name', name);
      // expect(user.rows[0].password).toBe(password);
      expect(todo).toHaveProperty('id');
      expect(todo).toHaveProperty('title', title);
      expect(todo).toHaveProperty('description', description);
      expect(todo).toHaveProperty('done', false);

    });
  
    test('updateTodo marks a todo as done', async () => {
      // First, create a todo to update
      const { id: todoId } = await createTodo(userId, 'Update Test', 'To be updated');
  
      const updatedTodo = await updateTodo(todoId);
      expect(updatedTodo).toHaveProperty('done', true);
    });
  
    test('getTodos retrieves all todos for a user', async () => {
      // Assuming there are already todos created in previous tests
      const todos = await getTodos(userId);
  
      expect(todos.rows.length).toBeGreaterThan(0);
      todos.rows.forEach(todo => {
        expect(todo).toHaveProperty('id');
        expect(todo.user_id).toEqual(userId);
      });
    });
  });
  