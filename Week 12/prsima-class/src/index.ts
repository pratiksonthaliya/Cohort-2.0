import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string, email: string) {
    await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName, 
            email
        }
    })
}
insertUser("admin1", "123456", "harkirat", "singh", 'email@123.com')

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

async function getTodosAndUserDetails(userId: number ) {
    const data = await prisma.user.findUnique({
        where: {
            id: userId
        },
        select: {
            username: true,
            email: true,
            todos: true,
        }
    })
    console.log(data);
}
getTodosAndUserDetails(1);