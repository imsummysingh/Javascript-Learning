/*let js = 'amazing';

let firstName="summy";
let lastName = "singh";
console.log("First name is: "+firstName);
console.log("Last Name is: "+lastName);
console.log("Full Name is: "+firstName +" "+lastName);
*/

// let jsBool = true;
// console.log(jsBool);

// console.log(typeof(jsBool));
// console.log(typeof jsBool);
// console.log(typeof true);
// console.log(typeof 3);
// console.log(typeof(3));
// console.log(typeof NaN);
// console.log(typeof(NaN));
// console.log(typeof null);
// console.log(typeof(null));
// console.log(typeof string);
// console.log(typeof 'summy');
// let jsIs;
// console.log(typeof jsIs);
// console.log(typeof 3.14);
// console.log(typeof '');
// console.log(typeof(NaN));
// console.log(typeof null)

// const year=2020
// const ageSummy = year-1996;
// const ageSunny=year-1993;
// console.log(ageSummy, ageSunny);

// console.log(ageSummy*2, ageSummy+10, ageSummy/2, ageSummy%2);
// console.log(ageSummy*2);
// console.log(ageSummy+10);
// console.log(ageSummy/2);
// console.log(ageSummy%5);
// console.log(2**3);//mean 2 to the power 3


//assignmnet opperator
// let x=10+15;
// console.log(x);
// x+=10;
// console.log(x);
// x-=10;
// console.log(x);
// x*=10;
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);
// ++x;
// console.log(x);
// --x;
// console.log(x)

//conparison operator >,<,>=,<= it will return true or false

// const now = 2020;
// const ageSummy = now-1996;
// const ageSunny = now-1994;
// console.log(now-1994>now-1996)

//string
// const fName = 'summy';
// const job = 'developer';
// const birthYear = 1996;
// const year = 2020;
// const summy = "I'm "+fName+', a '+(year-birthYear)+' Year old '+job+' !';
// console.log(summy); 

// //template literal
// const summyNew = `I'm ${fName}, a ${year-birthYear} years old ${job}!`
// console.log(summyNew);

// console.log(`just a regular string`);

// console.log('string \n\ with \n\ multiple lines');

// console.log(`string
// with multiple line
// using literals`);

//if statement
// let age=24;
// if(age>=18){
//     console.log("You are adult now")
// }else{
//     console.log("You are not an adult yet, please wait!");
// }

// //type conversion 
// const inputYear = '1996';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18)

// console.log(Number('jonas'));

// console.log(String(23)); 

// //type coersion
// console.log('I am '+23+' Years old');
// //whenever js sees a + operator it automatically convert number to string
// console.log('23'-'10'-3);   //string to number
// console.log('23'+'10'+3);   //number to string
// console.log('13'*'2');

//5 falsy value---0,'',undefined,null,Nan
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean({}));//empty object it is
// console.log(Boolean(null));
// console.log(Boolean(2));

//if else scenerio for falsy value
// const money=0;
// if(money){
//     console.log("Don't spend all")
// }else{
//     console.log("Get a Job!");
// }//return false because of 0

// let height;
// if(height){
//     console.log("It's true that you have height");
// }else{
//     console.log("Stop using Undefined, please define your height");
// }

// const fav =  prompt("what is your fav number?");
// console.log(fav);


//logical Operato
// const hasDriversLicense = true; //A
// const hasGoodVision = false;  //B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasGoodVision);

//switch case
// const day = 'saturday';

// switch(day){
//     case 'monday':
//         console.log("It's Monday");
//         break;
//     case 'tuesday':
//         console.log("It's Tuesday");
//         break;
//     case 'wednesday':
//         console.log("It's Wednesday");
//         break;
//     case 'thursday':
//         console.log("It's Thursday");
//         break;
//     case 'friday':
//         console.log("It's Friday");
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log("It's Weekend");
//         break;
//     default:
//         console.log('Take a break!');
// }

//ternary operator

const age = 23;
age>=18?console.log("adult man"):console.log("you are a minor");

const drink = age>=18?'wine':'water';
console.log(drink);

console.log(`I would like to drink ${age>=18?'wine':'water'}`);