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