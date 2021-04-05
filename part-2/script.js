'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest){
//     hasDriverLicense = true;
// }

// if(hasDriversLicense){
//     console.log("I can Drive");
// }

// const interface = 'summy';  //error for reserved code
// const private = 243;

//function

// function logger(){
//     console.log("Calling from function");
// }

// logger();       //calling/running/invoking
// logger();
// console.log("after 2 functionn call");
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// fruitProcessor(2,3);
// const appleJuice = fruitProcessor(2,3); //capturing the value of return value into a variable 
// console.log(appleJuice);
// console.log(fruitProcessor(3,4));

//function declaration & expression

// const result1 = calcAge1(1996);
// console.log(result1);

// function calcAge1(birthYear){
//     //const age = 2021-birthYear;
//     return 2021-birthYear;
// }

// const result = calcAge1(1996);
// console.log(result);

// //function expression

// const calcAge2 = function (birthYear){
//     return 2021-birthYear;
// }

// const result2 = calcAge2(1994);
// console.log(result2);


//Arrow Function
// const calcAge1 =birthYear => 2021-birthYear;
// const result = calcAge1(1996);
// console.log(result);

// const calcAge2 = (birthYear)=>{
//     return 2021-birthYear;
// }
// const result1 = calcAge2(1961);
// console.log(result1);


//Function calling another function

// function cutFruitPieces(fruit){
//     return fruit*4;
// }

// function fruitProcessor(apples, oranges){
    
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `juice with ${applePieces} apples and ${orangePieces} oranges`;
//     return juice;
// }

// console.log(fruitProcessor(2,3));


//Arrays
// const friends = ['summy','ranjeet','shubham','vishal','vicky']; //literal syntax to create array
// console.log(friends);

// const years = new Array(2018,2019,2020,2021,2022,2023); //array function to create array
// console.log(years);

// console.log(friends[0]);
// console.log(friends[3]);
// console.log(friends.length);
// //console.log(friends.push("Mani"));
// console.log(friends[friends.length-1])
// friends[2]="mani";
// console.log(friends);

// const job = 'software developer';
// const summy = ['summy','singh',1996,'male',2020-1996,job];
// console.log(summy);


//array methods
// const friends = ['summy','ranjeet','shubham','vishal','vicky'];
// friends.push("mani");
// console.log(friends);
// friends.pop();
// console.log(friends);

// friends.unshift("sunny");
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('summy'));
// console.log(friends.indexOf('sunny'));

// console.log(friends.includes('summy'));
// console.log(friends.includes('sunny'));


//objects   -- key value pair

// const summyArray = [
//     'summy',
//     'singh',
//     1996,
//     'software developer',
//     2020-1996
// ];//cannot provide fname, lname,job and all details in array and that is why object come and help


//key is also called properties, so we can sy this object summy have 6 properties

//object literal syntax and easiest way to write
// const summy = {
//     fName:'summy',
//     lName:'singh',
//     job:'Software Developer',
//     age:2020-1996,
//     dob:'10-05-1996',
//     friends:['ranjeet','shubham','vishal','vicky']
// };

// console.log(summy);

// //dot notation
// console.log(summy.age);
// console.log(summy.fName);

// //bracket notation
// console.log(summy['lName']);

// summy.zodiac = 'Taurus';
// summy['passion']='photography';
// console.log(summy);


//object method
// const summy = {
//     fName:'summy',
//     lName:'singh',
//     job:'Software Developer',
//     birthYear:1996,
//     friends:['ranjeet','shubham','vishal','vicky'],
//     hasDriversLicense: false,

//     // calcAge: function(birthYear){
//     //     return 2020-birthYear;
//     // }

//     // calcAge: function(){
//     //     console.log(this);
//     //     return 2020-this.birthYear;
//     // }

//     calcAge: function(){
//         this.age = 2020-this.birthYear;
//         return this.age;
//     }
// };

// // console.log(summy.calcAge(1996));
// //console.log(summy['calcAge'](1996));

// console.log(summy.calcAge());
// console.log(summy.age);

//Loop- For Loop 
// for(let rep=1;rep<=15;rep++){
//     console.log('Rep No: '+rep);
// }

// for(let rep=1;rep<=15;rep++){
//     console.log(`Rep No: ${rep}`);
// }


// const summyArray = [
//     'summy',
//     'singh',
//     1996,
//     'software developer',
//     2020-1996
// ];

// const types=[];

// for(let i=0;i<summyArray.length;i++){
    
//     //reading data from summyArray
//     console.log(summyArray[i]);

//     //Reading data and type
//     //console.log(summyArray[i], typeof summyArray[i]);

//     //ffilling type array
//     //types[i]=typeof summyArray[i];
//     types.push(typeof summyArray[i]);
// }

// console.log(types);


//continue and break

// console.log("-----Only Strings------")
// for(let i=0;i<summyArray.length;i++){
//     if(typeof summyArray[i] !== 'string'){
//         continue;
//         //console.log(summyArray[i], typeof summyArray[i])
//     }   
//     console.log(summyArray[i], typeof summyArray[i])
// }

// console.log("-----Break with Number------")
// for(let i=0;i<summyArray.length;i++){
//     if(typeof summyArray[i] === 'number'){
//         break;
//         //console.log(summyArray[i], typeof summyArray[i])
//     }   
//     console.log(summyArray[i], typeof summyArray[i])
// }

//looping backward
// const summyArray = [
//     'summy',
//     'singh',
//     1996,
//     'software developer',
//     2020-1996
// ];

// for(let i = summyArray.length-1;i>=0;i--){
//     console.log(i,summyArray[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------- Starting exercise ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//   }
// }


//While loop

let rep=0;
while(rep<=10){
    console.log(`Rep No: ${rep}`);
    rep++;
}