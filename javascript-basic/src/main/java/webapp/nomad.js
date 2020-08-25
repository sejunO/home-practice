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
let arr2 = new Array("a","b","c","d", "d");
let arr3 = [1,2,3,4];

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


//map 
const map = new Map();
map.set("2019101","HongGilDong");
map.set("2019102","KimSaRang");
map.set("2019103","KandDongSu");

console.log("### Original data: forEach with Arrow")
map.forEach((value, key) => console.log(key, value));

console.log("### Original data: for-of")
for(let item of map ) {
  console.log(item[0],item[1]);
}

console.log("### Original data: for-of with key, map")
for(let [key, value] of map ) {
  console.log(key,value);
}

console.log("### Original data: map.keys()")
const keys = map.keys();
for(let key of keys) {
  console.log(map.get(key));
}

console.log("### Map functions")
console.log("get 201901: "+map.get("2019101"));
map.delete("2019103")
console.log("after delete 201903, has : ", map.has("2019103"));


//set

const set = new Set();
set.add("HongGilDong");
set.add("KimSanRang");
set.add("KangDongSu");

console.log("## Original Set: forEach")
set.forEach((value) => console.log(value));

console.log("## Original Set: for-of")
for(let item of set ) {
  console.log(item);
}

set.delete("KangDongSu");
console.log("## After delete KangDongSu has: "+ set.has('KangDongSu'));
console.clear();

const title = document.querySelector("#title");
const BASE_COLOR = "black";
const OTHER_COLOR = "blue";
function handleClick() {
  const title_color = title.style.color;
  if (title_color == BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

window.addEventListener("click", handleClick);

