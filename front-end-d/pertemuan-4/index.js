// JavaScript Function

// Cara 1.Function Declaration
// Fungsi yang berdiri sendiri

//Function initialization
// function greetings1() {
//   console.log("Hello World");
// }
// greetings1(); //Function call

// // Cara 2. Function Expression
// let greetings2 = function () {
//   console.log("Hello World");
// };
// greetings2();

// Parameter & Argument

// Cara 1
//                  paramater
// function greetings1(fullName) {
//   return "Hello " + fullName;
// }
// //                      argument
// let output1 = greetings1("John Doe");
// console.log(output1);

// // Cara 2
// let greetings2 = function (fullName) {
//   return "Hello " + fullName;
// };
// let output2 = greetings2("Jane Doe");
// console.log(output2);

//Function Hoisting

// Cara 1

// //                        argument
// let output1 = greetings1("John Doe");
// console.log(output1);
// //                  parameter
// function greetings1(fullName) {
//   return "Hello " + fullName;
// }

// // Cara 2 (ERROR)
// let output2 = greetings2("Jane Doe");
// console.log(output2);

// let greetings2 = function (fullName) {
//   return "Hello " + fullName;
// };

//Global dan Local Scope (Function & Block)

let x = 10; //Global

function foo() {
  let y = 20; //Local function
  console.log(x); //10
  console.log(y); //20
  if (x < y) {
    let z = 30; //Local block
    console.log(z); //30
  }
  //   console.log(z); //ERROR
}
// console.log(y); //ERROR
console.log(x); //10

foo();
