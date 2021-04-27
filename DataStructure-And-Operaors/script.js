'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
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
  },

  order: function(starterIndex, mainIndex){
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