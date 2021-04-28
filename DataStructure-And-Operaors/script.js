'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


// Data needed for first part of the section

const openingHours= {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //before ES6
  //openingHours:openingHours,

  //ES6 enhanced object literals
  openingHours,

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },

  // order: function(starterIndex, mainIndex){
  //   return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  // },

  //ES6 Enhanced
  order(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },

  // orderDeliver: function(obj){
  //   console.log(obj);
  // }
  orderDeliver: function({starterIndex=1, mainIndex=0, time='21:30', address}){
    console.log(`order Received with Details: ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]} at ${time} on ${address}`);
  },

  orderPasta: function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizz: function(mainIngredient,...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

//String: 3

//split: allows us to split the string into different part
// console.log('a+ver+nice+string'.split('+'));

// const[firstName, lastName] = 'Summy Singh'.split(' ');
// console.log(firstName,lastName);

// //split and join
// const newName = ['Mr.',firstName,lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function(name){
//   const names = name.split(' ');
//   const namesUpper = [];

//   for(const n of names){
//     //namesUpper.push(n[0].toUpperCase()+n.slice(1));
//     namesUpper.push(n.replace(n[0],n[0].toUpperCase()));
//   }
//   console.log(namesUpper);
//   console.log(namesUpper.join(' '));
// }
// capitalizeName('summy kumar singh');
// capitalizeName('ranjeet kumar');

// //padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25,'-').padEnd(30,'+'));

// //Repeat
// const message2 = "Hello Summy";
// console.log(message2.repeat(10));



//String : 2

// const airline = 'TAP Air Portugal';
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());  

// //Fix capitalization in name
// const passenger = 'SuMmY';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase()+passengerLower.slice(1);
// console.log(passengerCorrect);

// const nameCorrect = function(name){
//   const nameLower = name.toLowerCase();
//   const nameCorrect = nameLower[0].toUpperCase()+nameLower.slice(1);
//   return nameCorrect;
// }
// console.log(nameCorrect('SuMmYKumAr'));

// //check email: comparing email
// const email = 'hello@gmail.com';
// const loginEmail = '     Hello@GMAIL.com \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email===normalizedEmail);

// //replacing
// const priceGB = '288,97@';
// const PriceUs = priceGB.replace('@','$').replace(',','.');
// console.log(PriceUs);

// //boolean
// const plane = 'AirBus A370neo';
// console.log(plane.includes('neo'));//true
// console.log(plane.includes('cbe'));//false
// console.log(plane.startsWith('Air'));//true
// console.log(plane.endsWith('neo'));//true

//Strings :1

// const airline = 'TAP Air Portugal';
// const plane ='A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B370'[0]);

// console.log(airline.length);
// console.log('B370'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal')); //-1 because of case sensitive
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));//4 is the begin parameter from where extraction start, also substring and do not change the original string and always return new string and store it in value
// console.log(airline.slice(4,7));//exclude from 7, 7-4=3(so 3 value);

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ')+1));

// console.log(airline.slice(-2));//from end extraction
// console.log(airline.slice(1,-1));


// const checkMiddleSeat = function(seat){
//   //B & E are middle seats
//   const s = seat.slice(-1);
//   if(s==='B'||s==='E'){
//     console.log("You got Middle Seat. LOL");
//   }else{
//     console.log("You are Lucky");
//   }
// }
// checkMiddleSeat('11B')
// checkMiddleSeat('22C');
// checkMiddleSeat('7D');
// checkMiddleSeat('8E');

// console.log(new String('Summy'));
// console.log(typeof String); //function
// console.log(typeof string);//undefined
// console.log(typeof new String('Summy'));//object
// console.log(typeof 'summy');//string



//Map: Iteration

// const question = new Map([
//   ['question','Best Programming language in the world?'],
//   [1,'C Prog'],
//   [2,'Java'],
//   [3,'JavaScript'],
//   ['correct',3],
//   [true,'Correct!!!'],
//   [false,'Oops!'],
// ]);

// console.log(question);

//convert obj to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// console.log(question.get('question'));
// for(const [key,value] of question){
//   if(typeof key==='number'){
//     console.log(`Options ${key}:${value}`);
//   }
// }
// const answer = Number(prompt(`select one right option acc to you`));
// console.log(answer);

// console.log(question.get(question.get('correct')===answer));

//convert Map to Array
// console.log([...question]);
// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);


//MAPS: Fundamentals

// const rest = new Map();
// rest.set('name','La Pizza');
// rest.set(1,'France');
// rest.set(2,'Portugal');
// console.log(rest);

// rest.set('categories',['Italian','Chinese','Organic','Vegetarian'])
//     .set('open',10)
//     .set('close',23)
//     .set(true,'We are Open')
//     .set(false,'We are close');

// console.log(rest);

// // rest.get('name');
// console.log(rest.get('name'));

// const time = 21;
// console.log(rest.get(time>rest.get('open')&&time<rest.get('close')));

// console.log(rest.has('categories'));
// console.log(rest.has('summy'));

// rest.delete(2);
// console.log(rest);

// console.log(rest.size);
// // rest.clear();
// // console.log(rest);

// rest.set([1,2],'Test');
// console.log(rest);
// console.log(rest.get([1,2]));//undefined because [1,2] is not same in heap

// const arr = [1,2];
// rest.set(arr,'Test New');
// console.log(rest);
// console.log(rest.get(arr));




//SETS

// const orderSet = new Set([
//   'pasta',
//   'pizza',
//   'burger',
//   'pizza',
//   'pasta',
//   'macroni',
//   'burger',
// ]);
// console.log(orderSet);
// console.log(orderSet.size); //4 just like length in array
// console.log(orderSet.has('pizza')); //true just like include in array
// console.log(orderSet.has('Bread'));

// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// console.log(orderSet);
// orderSet.delete('macroni');
// console.log(orderSet);

// // orderSet.clear();
// // console.log(orderSet);

// for(const order of orderSet){
//   console.log(order);
// }


// //Example
// const staff=['Waiter','Chef','Waiter','Manager','Chef','RoomCleaner','Chef'];
// const staffUnique = new Set(staff);
// console.log(staffUnique);

// //const staffUnique = [...new Set(staff)];
// const arr=[...staffUnique];
// console.log(arr);




//looping objects_object Keys, Value and Entries


//Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// // console.log(`we are open on ${properties.length} days`);
// let openStr = `we are open on ${properties.length} days: `;

// for(const day of properties){
//   openStr+=`${day}, `;
// }
// console.log(openStr);

// // for(const day of Object.keys(openingHours)){
// //   console.log(day);
// // }

// //Property VALUES

// const values = Object.values(openingHours);
// console.log(values);

// //Property ENTRIES--- Entire object
// const entry = Object.entries(openingHours);
// //console.log(entry);

// // for(const x of entry){
// //   console.log(x)
// // }

// //[key,value]
// for(const [key,{open, close}] of entry){
//   console.log(`On ${key} we open at ${open} and close at ${close}`)
// }


//optional chaining


// console.log(restaurant.openingHours.mon.open);
// if(restaurant.openingHours.mon){
//   console.log(restaurant.openingHours.mon.open);
// }
// if(restaurant.openingHours.fri){
//   console.log(restaurant.openingHours.fri.open);
// }

//without optional chaining
// console.log(restaurant.openingHours.mon.open);

// //with optional chaining
// console.log(restaurant.openingHours.mon?.open);
// //multiple otional chaining
// console.log(restaurant.openingHours?.mon?.open);

// const days=['mon','tue','wed','thu','fri','sat','sun'];
// for(const day of days){
//   //console.log(day);
//   const open = restaurant.openingHours[day]?.open??"Closed";
//   console.log(`On ${day}, we open at ${open}`);
// }

// //optional chaining with methods
// console.log(restaurant.order?.(0,1)??"Method does not exist");
// console.log(restaurant.orderRisotto?.(0,1)??"Method does not exist");

// //optional chaining with arrays
// // const users =[
// //   {name:'jonas',email:'hello@gmail.com'}
// // ];

// const users=[];
// console.log(users[0]?.name??"user does not exist");


//for of loop

// const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
// for(const item of menu){
//   console.log(item);
// }//one by one and can use continue and break

// for(const item of menu.entries()){
//   console.log(item);
// }

// console.log(menu.entries());//array iterators
// console.log([...menu.entries()]);

// for(const[i,el] of menu.entries()){
//   console.log(`${i+1}:${el}`);
// }

//Nullish Coalescing Operator

// restaurant.numGuests=0;
// const guest = restaurant.numGuests||10;
// console.log(guest);


// //Nullish: null and undefined(Not include 0 or '')
// const guestCorrect = restaurant.numGuests??10;
// console.log(guestCorrect);


//Short-Circuiting

// console.log('------------OR--------------');
// //USe any data type, return any data type, short-circuiting
// console.log(3||'Jonas');  //3
// console.log(''||'Jonas'); //jonas
// console.log(true||false); //true
// console.log(false||true); //true
// console.log(true||0); //true
// console.log(undefined||null); //null--even though null is falsy value
// console.log(undefined||null||false||''||'Summy');//summy


// //restaurant.numGuests=20;
// const guest1 = restaurant.numGuests?restaurant.numGuests:10;
// console.log(guest1);

// //or

// const guest2 = restaurant.numGuests||10;
// console.log(guest2);

// console.log('---------------AND------------------');
// console.log(0&&'Jonas');//0
// console.log(7&&'Jonas'); //7

// console.log('Hello'&&23&&null&&'Jonas');//null
// console.log('Hello'&&23&&'Jonas');//jonas

// //practical example

// if(restaurant.orderPizz){
//   restaurant.orderPizz('mushroom','spinach');
// }

// restaurant.orderPizz&&restaurant.orderPizz('mushroom','spinach');




///////Rest Pattern & Rest Parameters

//1)Destructuring

//Spread, because on right side of =
//const arr = [1,2,...[3,4]];

//Rest, because on left side of =
// const [a,b,...others]=[1,2,3,4,5];
// console.log(a,b,others);

// const[pizza, ,risotto,...otherFood]=[...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza,risotto,otherFood);

// //objects
// const {sat,...weekdays}=restaurant.openingHours;
// console.log(weekdays);

// //2)Functions---rest parameters
// const add = function(...numbers){
//   //console.log(numbers);
//   let sum = 0;
//   for(let i=0;i<numbers.length;i++){
//     sum+=numbers[i];
//   }
//   console.log(sum);
// }
// add(2,3)
// add(5,3,7,2)
// add(1,2,3,4,5,6,7,8,9)

// const x = [1,2,3];
// add(...x);

// restaurant.orderPizz('mushroom','onion','capsicum','olive');



//Spread Operator
// const arr = [7,8,9];
// const badNewArray=[1,2, arr[0],arr[1],arr[2]];
// console.log(badNewArray); 

// // const newArr = [1,2,arr];
// // console.log(newArr);//1,2,Array(3)

// const newArr = [1,2,...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu=[...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //copy array

// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// //join 2 array
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// //Iterbles: array, strings,maos,sets. Not Objects
// const str = 'Jonas';
// const letters = [...str,'','S.'];
// console.log(letters);

// //real world example
// // const ingredients = [prompt("Let's make pasta! Ingredient 1?"),prompt("Let's make pasta! Ingredient 2?"),prompt("Let's make pasta! Ingredient 3?")];
// // console.log(ingredients);

// // restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
// // restaurant.orderPasta(...ingredients);

// //objects
// const newRestaurant = {foundedIn:1998,...restaurant, founder: 'Summy'}
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name='La Pizza';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);




//object destructuring
// restaurant.orderDeliver({
//   time:'23:30',
//   address:'Daman',
//   mainIndex:2,
//   starterIndex: 2,
// })

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours,categories);

// const {name: restaurantName, openingHours: hours, categories: tags}=restaurant;
// console.log(restaurantName,hours,tags);

// //default values
// const{menu=[], starterMenu:starter=[]}=restaurant;
// console.log(menu,starter);

// //mutating a variables
// let a =111;
// let b = 999;
// const obj = {a:23, b:7, c:14};

// //{a,b}=obj;
// ({a,b}=obj);
// console.log(a,b);

//nested obj

// const {fri}=openingHours;
// console.log(fri);

// const {fri:{open,close}}=openingHours;
// console.log(open,close);

// const {fri:{open:o,close:c}}=openingHours;
// console.log(o,c);




//destructuring array

// const arr = [2,3,4];
// console.log(arr);

// const [x,y,z]=arr;  //destructuring array
// console.log(x,y,z);

// // const [first,second]=restaurant.categories;
// // console.log(first,second);

// // const [first,,,second]=restaurant.categories;
// // console.log(first,second);

// let[main,,secondary]=restaurant.categories;
// console.log(main,secondary);

// // const temp = main;
// // main=secondary;
// // secondary=temp;

// // console.log(main,secondary);

// [main,secondary]=[secondary,main];
// console.log(main,secondary);

// //console.log(restaurant.order(2,0));

// //receive 2 return value from function
// const[starter,mainCourse]=restaurant.order(2,0);
// console.log(starter,mainCourse);


// //nested destructuring
// const nested = [2,4,[5,6,]];
// //console.log(nested[0],nested[2[0]]);  //2, undefined
// // const[i,,j]=nested;
// // console.log(i,j);//2,[5,6]

// const[i,,[j,k]]=nested;
// console.log(i,j,k);
// console.log(k);

// //default values
// // const [p,q,r]=[8,9];
// // console.log(p,q,r);

// const [p=1,q=1,r=1]=[8,9];
// console.log(p,q,r);