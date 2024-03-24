"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const sumAge = sumOfAge({ name: 'Ram', age: 12 }, { name: 'Shyam', age: 23 });
console.log(sumAge);
