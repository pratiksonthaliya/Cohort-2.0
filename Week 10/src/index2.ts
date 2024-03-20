import { PrismaClient } from "@prisma/client";
import { log } from "console";

const prisma = new PrismaClient();

// async function insertUser(username: string, password: string, firstName: string, lastName: string) {
//     const res = await prisma.user.create({
//         data: {
//             email: username,
//             password,
//             firstName,
//             lastName
//         }
//       })
//       console.log(res);
// }

// insertUser("shyam@gmail.com", "4567rty", "Shyam", "Singh")


// interface UpdateParams {
//     firstName: string;
//     lastName: string;
// }

// async function updateUser(username: string, {
//     firstName,
//     lastName
// }: UpdateParams) {
//   const res = await prisma.user.update({
//     where: {
//         email: username
//     },
//     data: {
//         firstName, lastName
//     }
//   })
// }

// updateUser("ram@gmail.com", {firstName: 'Rama', lastName: 'Singhal'} )


async function getAllUser() {
    const res = await prisma.user.findMany()
    console.log(res);
  }
  
  getUser('Rama')

async function getUser(email: string) {
  const res = await prisma.user.findMany({ where: {email: email}})
  console.log(res);
}

getAllUser()
getUser('shyam@gmail.com')