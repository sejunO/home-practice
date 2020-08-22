'use strict';

const arr1 = new Array();
const arr2 = [1, 2];

const fruits = ['apple', 'banana'];
console.log(fruits[0]);

for (let fru of fruits) {
    console.log(fru);
}


fruits.forEach((f) => console.log(f));

// push와 pop으로 값을 뒤에 넣고 뺀다.
fruits.push('water');
console.log(fruits);
fruits.pop();
console.log(fruits);
// unshift 는 앞에 값을 추가하고 shift는 앞에 값을 뺀다/
fruits.unshift('non');
fruits.push('jun', 'jin');
console.log(fruits);