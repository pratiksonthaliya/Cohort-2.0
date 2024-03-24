"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function insertUser(username, password, firstName, lastName, email) {
    await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName,
            email
        }
    });
}
insertUser("admin1", "123456", "harkirat", "singh", 'email@123.com');
// interface UpdateParams {
//     firstName: string;
//     lastName: string;
// }
// async function updateUser(username: string, {
//     firstName,
//     lastName
// }: UpdateParams) {
// //   const res = await prisma.user.update({
// //     // where: { username },
// //     data: {
// //       firstName,
// //       lastName
// //     }
// //   });
// //   console.log(res);
// }
// updateUser("admin1", {
//     firstName: "new name",
//     lastName: "singh"
// })
// async function getTodos(userId: number ) {
//     const res = await prisma.todo.findMany({
//         where: {
//             userId
//         }
//     })
//     console.log(res);
// }
// getTodos(1);
// async function getTodosAndUserDetails(userId: number, ) {
//     const todos = await prisma.todo.findMany({
//         where: {
//             userId
//         }
//     })
//     const user = await prisma.user.findUnique({
//         where: {
//             id: userId
//         }
//     })
//     console.log(todos);
//     console.log(user);
// }
// getTodosAndUserDetails(1);
async function getTodosAndUserDetails(userId) {
    const data = await prisma.user.findUnique({
        where: {
            id: userId
        },
        select: {
            username: true,
            email: true,
            todos: true,
        }
    });
    console.log(data);
}
getTodosAndUserDetails(1);
