'use strict'

let user = {
    name: "john",
    surname: "Smith",
    age: 30,
    sayHi: () => {
        alert(user.name + " Hi!")
    }

    
};
let a;
let b;
let calculator = {
    sum:(a, b) => {
        return a + b;
    },
    mul: (a, b) => {
        return a * b;
    },
    read: () => {
        a = +prompt("값을 입력하세요", 0);
        b = +prompt("값을 입력하세요", 0);
    }
}

calculator.read();
alert(calculator.sum(a, b));
alert(calculator.mul(a, b));

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  
 
  for (let vegetable of recipeMap.keys()) {
    alert(vegetable);
  }
  

  for (let amount of recipeMap.values()) {
    alert(amount);
  }
  
 
  for (let entry of recipeMap) { 
    alert(entry); //
  }
