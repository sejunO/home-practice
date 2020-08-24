// 1. Object to JSON

let json = JSON.stringify(true);


const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

rabbit.jump();

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return value;
});

console.log(json);
console.clear();
function print(name) {
    console.log(`hello ${name}`);
}
print(`sejun`);





// 2. JSON to Object