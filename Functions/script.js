'use strict';


//default parameter
// const bookings = [];

// const createBooking = function(flightNum, numPassengers=1, price=199){
    
//     //ES5 way of setting default parameter
//     // numPassengers=numPassengers||1;
//     // price = price||199;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH124',2,800);

// //to skip default parameter
// createBooking('LH125',undefined,1000);



//Function Value and Reference Type

// const flight = 'LH234';
// const jonas = {
//     name:'Jonas Sch',
//     passport: 123456789
// }

// const checkIn = function(flightNum,passenger){
//     flightNum = 'LH999';
//     passenger.name = 'Mr. '+passenger.name;

//     if(passenger.passport === 123456789){
//         alert('check In');
//     }else{
//         alert('Wrong Passport');
//     }
// }
// // checkIn(flight,jonas);
// // console.log(flight);
// // console.log(jonas);

// //flightNum = flight
// // const flightNum=flight;
// // const passenger= jonas;


// const newPassport = function(person){
//     person.passport = Math.trunc(Math.random()*100000000);
// }

// newPassport(jonas);
// checkIn(flight, jonas);

// console.log(typeof function(){});



//Function accepting callback function

// const oneWord = function(str){
//     return str.replace(/ /g, ' ').toLowerCase();
// };

// const upperFirstWord=function(str){
//     const [first,...others]= str.split(' ');
//     return [first.toUpperCase(),...others].join(' ');
// };

// //higher order function
// const transformer = function(str, fn){
//     console.log(`Original String: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);
// }

// transformer('JavaScript is the best!', upperFirstWord);
// transformer(`JavaScript is the best!`, oneWord);


// //JS uses callback all the time

// const high5 = function(){
//     console.log('👋');
// }

// document.body.addEventListener('click',high5);

// ['Summy','Ranjeet','Shubham'].forEach(high5);


//Function Returning Function

// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }

// const greeterHey = greet('Hey');
// greeterHey('Summy');
// greeterHey('Ranjeet');

// greet('Hello')('Shubham');

// //using arrow function

// const greetArr = greeting=>name=>console.log(`${greeting} ${name}`);

// greetArr('Hi')('Vishal');


//The call and apply method

// const lufthansa = {
//     airline: 'lufthansa',
//     iataCode : 'LH',
//     bookings:[],
//     book(flightNum, name){
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({flight:`${this.iataCode}${flightNum}`,name})
//     },
// };

// lufthansa.book(239,'Jonas Sch');
// lufthansa.book(635,'John Smith');
// console.log(lufthansa);

// const eurowings={
//     airline:'Eurowings',
//     iataCode:'Ew',
//     bookings:[],

// };

// const book = lufthansa.book;

// //does not work
// // book(23,'Sarah John');


// //call method
// // book.call(eurowings,23,'sarah john');
// // console.log(eurowings);

// // book.call(lufthansa,239,'Mary Cooper');
// // console.log(lufthansa);


// // //apply method
// // const flightData = [582,'George Cooper'];
// // book.apply(eurowings,flightData);
// // console.log(eurowings);

// // //better way then apply method 
// // book.call(lufthansa,...flightData);
// // console.log(eurowings);


// //Bind method--bind does not immediately calls the function,
// //instead it return the new function, where the this keyword is bound

// const bookEw = book.bind(eurowings);
// const bookLh = book.bind(lufthansa);

// bookEw(23,'Steven Fleming');
// bookLh(87,'Ranjeet Kumar');

// const bookEw23 = book.bind(eurowings,23);
// bookEw23('Summy Singh');
// bookEw23('Shubham Gupta');


// //with event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function(){
//     console.log(this);
    
//     this.planes++;
//     console.log(this.planes);
// }
// // lufthansa.buyPlane();

// document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa));

// //partial application

// const addTax = (rate,value)=>value+value*rate;
// console.log(addTax(0.1,200));

// const addVAT = addTax.bind(null, 0.23);
// //addVAT = value=>value+value*0.23;

// console.log(addVAT(100));
// console.log(addVAT(23));


// const addTaxRate = function(rate){
//     return function(value){
//         return value+value*rate;
//     }
// }

// console.log(addTaxRate(0.5)(100));



//Immediately invoked function Expression
//sometimes in JS we need a function that is executed only once and then never again

// const runOnce = function(){
//     console.log('This will never run again');
// }

// runOnce();

// //IIFE--immediately invoked func expression
// (function(){
//     console.log('This will never run again function');
// })();

// (()=>console.log('This will never run again function'))();


// //because of block scope we dont use IIFE in modern JS anymore
// {
//     const isPrivate = 23;
//     var isPrivate1 = 24;
//     let isPrivate2 = 25;
// }

// //console.log(isPrivate);
// console.log(isPrivate1);
// console.log(isPrivate2);


// Closures
//closure is not a feature we explicitly use, it's just happen automatically we just need to recognize it

// const secureBooking = function(){
//     let passengerCount = 0;

//     return function(){
//         passengerCount++;
//         console.log(`${passengerCount} passengers`);
//     }
// }

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);




//more example on closure

// let f;

// const g = function(){
//     const a = 23;
//     f=function(){
//         console.log(a*2);
//     };
// };

// const h = function(){
//     const b = 777;
//     f=function(){
//         console.log(b*2);
//     };
// };

// g();
// f();    //46


// //Re-assigning f function
// h();
// f();    //1554