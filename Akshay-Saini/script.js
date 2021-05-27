/*
//call, apply, bind

// let name = {
//     firstName: "summy",
//     lastName: "singh",
//     printFullName: function(){
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// }

// name.printFullName();

// let name2 = {
//     firstName:"Leo",
//     lastName:"Messi"
// }

// //function borrowing
// name.printFullName.call(name2);

let name = {
    firstName: "summy",
    lastName: "singh",
}

//in general case:
let printFullName = function(hometown, state){
        console.log(`${this.firstName} ${this.lastName} from ${hometown} and it's in ${state}`);
    }

printFullName.call(name, "Nadiyawan", "Bihar");

let name2 = {
    firstName:"Leo",
    lastName:"Messi"
}

let name3 = {
    firstName:"MS",
    lastName:"Dhoni"
}

//function borrowing
printFullName.call(name2,"Argentina","Arg");

printFullName.apply(name3,["Ranchi","Jharkhand"]);

//Bind Method
let printMyName = printFullName.bind(name3,"Ranchi","Jharkhand");
console.log(printMyName);   //return function
printMyName();  //invoking the function

*/

////////////////////////////////////////////////////////////////////
//Polyfill for bind method

// let name={
//     firstName: "Summy",
//     lastName:"Singh"
// }

// let printName = function(hometown, country){
//     console.log(`${this.firstName} ${this.lastName} from ${hometown} in ${country}`);
// }

// let printMyName = printName.bind(name,"Bihar");
// printMyName("India");

// //polyfill

// Function.prototype.mybind=function(...args){
//     //this -> printName
//     let obj = this,
//     params = args.slice(1);
//     return function(...args2){
//         obj.apply(args[0],[...params,...args2]);
//     }
// }

// let printMyName2 = printName.mybind(name,"Bihar");
// printMyName2("India");

//////////////////////////////////////////////////////////
// //Function Currying

// let multiply = function(x,y){
//     console.log(x*y);
// }

// //By Using Binding

// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(5);

// let multiplyByTwo = multiply.bind(this, 2,3);
// multiplyByTwo(5);   //6

// let multiplyByThree = multiply.bind(this, 3);
// multiplyByThree(3);


// //By using closure

// let multiply = function(x){
//     return function(y){
//         console.log(x*y);
//     }
// }

// let multiplyByTwo = multiply(2);
// multiplyByTwo(3);

/////////////////////////////////////////////////////////////////////
// //Debouncing in JS  

// //300ms

// let counter = 0;
// const getData = () =>{
//     //calls an API and get data
//     console.log("Fetching Data", counter++);
// }

// //debounce method
// const doSomeMagic=function(fn, d){
//     let timer;
//     return function(){
//         let context = this,
//         args = arguments;
//         clearTimeout(timer);
//         timer = setTimeout(()=>{
//             getData.apply(context,args);
//         },d);
//     }
// }

// const betterFunction = doSomeMagic(getData,300)  