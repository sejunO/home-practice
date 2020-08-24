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

console.clear();

const result = fruits.join(); // 배열을 String 으로 변환, 구분자를 파라미터로 줄 수 있음.
console.log(result);

const arr3 = result.split(','); // String을 배열로 변환, 구분자를 파라미터로 줄 수있음.
console.log(arr3);

const arr4 = [1, 2, 3, 4, 5];
const results = arr4.reverse(); // 순서를 거꾸로 할 수 있음. 기존 배열도 바뀜.
console.log(arr4);
console.log(results);

