'use '


const stringFive = '5';
const numberFive = 5;

// == 은 type을 신경쓰지 않고 내용만 본다.
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === 은 type까지 신경써서 비교한다.
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// objcet 는 reference 형태로 저장, 배열과 비슷한 형태
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //false
console.log(ellie1 === ellie2); //false
console.log(ellie1 === ellie3); //true

//Test
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

//If operators

const name = 'ellie';

if(name === 'ellie') {
    console.log('Welcome, Ellie!');
}else {
    console.log('unkwnon');
}
//간단할 때만 사용하는게 좋다.
console.log(name === 'ellie' ? 'yes' : 'no');

// Swich

const brower = 'IE';
switch (brower) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('same all!');
        break;
}

// Loops
// While
let i = 3;
while(i > 0) {
    console.log('while:' + i);
    i--;
}

//do while
do {
    console.log('while:' + i);
    i--;
}while (i > 0);

//for
for(i = 3; i > 0; i--) {
    console.log('for:' + i);
}

for(let i = 3; i > 0; i = i-2) {
    console.log('for2:' + i);
}

for(let i = 0; i < 11; i++) {
    if(i == 8)
        break;
    console.log(i);

}
