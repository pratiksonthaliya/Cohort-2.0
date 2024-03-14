let x: number|string = 1;
x = "rama"
console.log(x);

// function greet (name: string) {
//     console.log(`Hello, ${name}`);
// }
// greet('Rama')

// function sum (a: number, b: number): number {
//     return a + b;
// }
// console.log(sum(2, 3));

// function isLegal(age: number) { //ts infers itself the return type
//     return age >= 18 ? true : false
// }
// console.log(isLegal(7));
// console.log(isLegal(78));


// function outer (inner : ()=>void) {
//     setTimeout(inner, 1000)
// }
// function outer2 (inner : Function) {
//     setTimeout(inner, 1000)
// }
// outer(()=> console.log("Hi there"))

// interface userInterface {
//     name: string, 
//     age: number,
//     email?: string
// }

// function isLegal (user: userInterface) : boolean {
//     return user.age >= 18 ? true : false
// }
// console.log(isLegal({name: "rama", age: 78}));


// interface Person {
//     name: string,
//     age: number,
//     greet(phrase: string) : void
// }

// class Employee implements Person {
//     name: string;
//     age: number;

//     constructor(n : string, a: number){
//         this.name = n;
//         this.age = a;
//     }

//     greet(phrase: string): void {
//         console.log(`${phrase} ${this.name}`);
//     }
// }

// const p1 = new Employee("Rama", 22)
// p1.greet("hola")



type Employee = {
    name: string;
    startDate: Date;
  };
  
  type Manager = {
    name: string;
    department: string;
  };
  
  type TeamLead = Employee & Manager;
  
  const teamLead: TeamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
  };
  

// Interface vs TypeS

//Enums
// type Direction = 'Up' | 'Down' | 'Left' | 'Right';
// function doSomething(keyPressed : Direction){

// }
// doSomething("Up")
// doSomething('fgh')

enum Direction2 {
  Up = 17,
  Down = 7,
  Left = 6,
  Right = 3
}
enum Direction1 {
  Up = 17,
  Down,
  Left,
  Right
}
enum Direction {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right'
}
function doSomething(keyPressed : Direction) {
  if(keyPressed == Direction.Up){

  }
}
doSomething(Direction.Down)
doSomething(Direction.Left)
//  used in express -> status codes combine in a enum

//Generics

function identity<T>(arg: T) : T {
  return arg
}
let op1 = identity<number>(2);
let op2 = identity<string>('Rama')

function getFirstNumber<T> (arr : T[]) : T {
  return arr[0];
}
let op3 = getFirstNumber<number>([1, 3, 4, 6]);
let op4 = getFirstNumber<string>(['ha', 'he', 'hi']);
op4.toLowerCase()

