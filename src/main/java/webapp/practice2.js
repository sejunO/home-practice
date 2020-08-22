'use strict'

function print() {
    console.log('Hello');
}
print();

let message = 100;
function prints(so) {
    console.log(so);
}
prints(message);

function show(message, from) {
    console.log('${message} by ${from}')
}

show('hi!');

// function printAll(...args) {
//     for (let i = 0; i <args.length; i++) {
//         console.log(agrs[i]);
//     }
// }

// printAll('dream', 'coding');

let globalMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
}

printMessage();


function printOb(object) {
    console.log(object.name, object.age);
}

const se = { 
    name: 'sejun', 
    age: 4
 };
printOb(se)


function makePerson(name, age) {
    return {
      name,
      age,
    };
  }

const person = makePerson('sejun', 27);
console.log(person);

const user = { name: 'sejun', age: 27};
const user2 = user;

console.log(user.name);
const user3 = Object.assign({}, user);
console.clear();

user2.name = 'jun';
console.log(user3);
console.log(user == user2);

const f1 = {color: 'red'};
const f2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, f1, f2);
console.log(mixed);