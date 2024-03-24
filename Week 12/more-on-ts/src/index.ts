// interface User {
//     name: string,
//     age: number,
// }

// function sumOfAge(user1: User, user2: User){
//     return user1.age + user2.age;
// }

// const sumAge = sumOfAge({name: 'Ram', age: 12}, {name: 'Shyam', age: 23})
// console.log(sumAge);


// interface User {
//     id: string,
//     name: string,
//     age: number,
//     email: string,
//     password: string
// }
// type UpdateProps = Pick<User, 'name' | 'age' | 'email'>
// function UpdateUser (user : UpdateProps) {

// }


// type UpdatePropsOptional = Partial<UpdateProps>


// interface Config {
//     readonly endpoint: string,
//     readonly apiKey: string
// }

// const config: Readonly<Config> = {
//     endpoint: 'api/v1/name',
//     apiKey: '34567'
// }


// interface User {
//     name: string,
//     age: number
// }
// type Users = Record<string, User>
// const users : Users = {
//     'abc' : {name: 'Ram', age: 22},
//     'acb' : {name: 'Rama', age: 12},
// }


// interface User {
//     id: string;
//     name: string;
// }
// const usersMap = new Map<string, User>();
// usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
// usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
// console.log(usersMap.get('abc123'));


// type EventType = 'click' | 'scroll' | 'mousemove';
// type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'
// const handleEvent = (event: ExcludeEvent) => {
//   console.log(`Handling event: ${event}`);
// };
// handleEvent('click'); // OK


import { TypeOf, z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

type userProfile = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody : userProfile = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);