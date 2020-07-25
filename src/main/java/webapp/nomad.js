console.log('I\'m Working. IM JS.');
 

//Variable

let a = 221;
let b = a - 5;
a = 4;
console.log(b,a); // 216 4 
// 변수는 기본적으로 cosnt, 필요할 때만 let
// camel표기법의 시작은 소문자

//Array

const mon = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "thu";
const fri = "Fri";
console.log(mon,tue,wed,thu,fri);
const something = "Something";
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", 54, true, something];
console.log(daysOfWeek);
console.log(daysOfWeek[2]);


//Object
//배열도 포함될 수 있다.
const junInfo =  {
    name: "sejun",
    age: 27,
    gender: "Male",
    favMovies: ["Along the gods", "LOTR", "Oldboy"]
}
console.log(junInfo);
console.log(junInfo.gender);

//function

function sayHello(name){
    console.log('Hello!', name);
}

sayHello("juns");

//배열선언
let arr = new Array();
let arr = new Array("a","b","c","d", "d");
let arr = [1,2,3,4];

arr[0] = 1;
arr[4] = 3;

for(let i = 0; i<5; i++){
    arr[i] = i;
}

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// push 추가

arr.push("e");

console.log(arr);

//pop 제거

arr.pop();

console.log(arr);

//sort 정렬

arr.sort();

console.log(arr);

