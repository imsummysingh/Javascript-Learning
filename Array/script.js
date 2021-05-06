'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');



const displayMovements = function(movements, sort=false){
    containerMovements.innerHTML='';
    //.textContent = 0;

    const movs = sort?movements.slice().sort((a,b)=>a-b):movements;

    movs.forEach(function(mov, i){     
        const type = mov>0?'deposit':'withdrawal'

        const html = `
            <div class="movements__row">
                <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
                <div class="movements__value">${mov}</div>
            </div>
        `;

        containerMovements.insertAdjacentHTML('afterbegin',html);
    });
};   

//displayMovements(account1.movements);

const calcDisplayBalance = function(acc){
    // const balance = acc.movements.reduce((acc,mov)=>acc+mov,0);
    // acc.balance=balance;
    acc.balance = acc.movements.reduce((acc,mov)=>acc+mov,0);
    labelBalance.textContent=`${acc.balance}€`;
};

//calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// calcDisplaySummary(account1.movements);

// const createUsernames = function(user){
//     const username = user.toLowerCase().split(' ').map(name=>name[0]).join('');
//     return username;
// };

const createUsernames = function(accs){

    accs.forEach(function(acc){
    acc.username = acc.owner.toLowerCase().split(' ').map(name=>name[0]).join('');
    });
};

createUsernames(accounts);
// console.log(accounts);

const updateUI=function(acc){
        //Display Movements
        displayMovements(acc.movements);

        //display balance
        calcDisplayBalance(acc);

        //display summary
        calcDisplaySummary(acc);
}

//create Event Handler
let currentAccount;

btnLogin.addEventListener('click',function(e){
    //prevent from submitting
    e.preventDefault();
    
    currentAccount=accounts.find(acc=>acc.username===inputLoginUsername.value);
    //console.log(currentAccount);

    if(currentAccount?.pin===Number(inputLoginPin.value)){
        //Display UI and message
        labelWelcome.textContent=`Welcome Back, ${currentAccount.owner.split(' ')[0]}`;
        containerApp.style.opacity = 100;

        //clear input fields
        inputLoginUsername.value=inputLoginPin.value='';
        inputLoginPin.blur();

        //update UI
        updateUI();
    }
});


btnTransfer.addEventListener('click',function(e){
    e.preventDefault();

    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(acc=>acc.username===inputTransferTo.value);
    
    //console.log(amount,receiverAcc);

    inputTransferAmount.value=inputTransferTo.value='';

    if(amount>0 &&
        receiverAcc && 
        currentAccount.balance>=amount && 
        receiverAcc?.username!==currentAccount.username)
        {
            //Doing the transfer
            currentAccount.movements.push(-amount);
            receiverAcc.movements.push(amount);

            //Update UI
            updateUI(currentAccount);
        }
})

btnLoan.addEventListener('click',function(e){
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);

    if(amount>0 && currentAccount.movements.some(mov=>mov>=amount*0.1));{
        //add movement
        currentAccount.movements.push(amount);

        //updateUI
        updateUI(currentAccount);
    }

    inputLoanAmount.value='';
})

btnClose.addEventListener('click',function(e){
    e.preventDefault();

    if(inputCloseUsername.value===currentAccount.username &&
         Number(inputClosePin.value)===currentAccount.pin){

            const index = accounts.findIndex(acc=>acc.username===currentAccount.username);

            //delete account
            accounts.splice(index,1);

            //hide UI
            containerApp.style.opacity=0;
         }

         inputCloseUsername.value=inputClosePin.value='';
})

let sorted = false;

btnSort.addEventListener('click',function(e){
    e.preventDefault();
    displayMovements(currentAccount.movements,!sorted);
    sorted=!sorted;
})


//dummy to create username

//const user = 'Steven Thomas Williams'; //stw
// const username = user.toLowerCase().split(' ').map(function(name){
//     return name[0];
// }).join('');
// const username = user.toLowerCase().split(' ').map(name=>name[0]).join('');
// console.log(username);

// console.log(containerMovements.innerHTML);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


//////Basic Array Method

//let arr = ['a','b','c','d','e','f'];

// console.log(arr);//a,b,c,d,e,f

//Slice
// console.log(arr.slice(2));//c,d,e,f
// console.log(arr.slice(2,4));//c,d
// console.log(arr.slice(-2));//e,f
// console.log(arr.slice(-1));//f
// console.log(arr.slice(1,-2));//b,c,d
// //shallow copy of arrow
// console.log(arr.slice());//a,b,c,d,e,f
// console.log([...arr]);//a,b,c,d,e,f


//Splice
// console.log(arr.splice(2)); //c,d,e,f
// console.log(arr);//a,b

// console.log(arr.splice(-1));    //f
// console.log(arr); //a,b,c,d,e

// console.log(arr.splice(1,2));   //b,c
// console.log(arr);//a,d,e,f

//Reverse

//const arr2 = ['j','i','h','g','f'];
// console.log(arr2);//j,i,h,g,f
// console.log(arr2.reverse());//f,g,h,i,j
// console.log(arr2);//f,g,h,i,j

// //CONCAT

// const letters = arr.concat(arr2);
// console.log(letters);//a,b,c,d,e,f,f,g,h,i,j

// console.log([...arr,...arr2]);//a,b,c,d,e,f,f,g,h,i,j

// //JOIN
// console.log(letters.join('-'));//a-b-c-d-e-f-f-g-h-i-j



//For each

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for of
// for(const movement of movements){
//     if(movement>0){
//         console.log(`You deposited ${movement}`)
//     }else{
//         console.log(`You withdrew ${Math.abs(movement)}`);
//     }
// }

//accesing entries with for-of
// for(const [i, movement] of movements.entries()){
//     if(movement>0){
//         console.log(`Movement ${i+1} You deposited ${movement}`)
//     }else{
//         console.log(`Movement ${i+1} You withdrew ${Math.abs(movement)}`);
//     }
// }

// //for each
//  console.log('---For Each---')
// // movements.forEach(function(movement){
// //     if(movement>0){
// //         console.log(`You deposited ${movement}`)
// //     }else{
// //         console.log(`You withdrew ${Math.abs(movement)}`);
// //     }
// // })

// //for-each entries

// movements.forEach(function(movement,i, arr){
//     if(movement>0){
//         console.log(`Movement ${i+1} You deposited ${movement}`)
//     }else{
//         console.log(`Movement ${i+1} You withdrew ${Math.abs(movement)}`);
//     }
// })

// //0: function(200)
// //1: function(450)
// //2: function(400)
// //...


//For Each with Map and Set

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);


// //map
// currencies.forEach(function(value, key, map){
//     console.log(`${key}:${value}`);
// });

// //set
// const currenciesUnique = new Set(['USD','GBP','USD','EUR','EUR']);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function(value, _, map){
//     console.log(`${value}:${value}`);
// })


//MAP Method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;

// //normal
// const movementsUsd = movements.map(function(mov){
//     return mov*eurToUsd;
//     //return 23;  //23,23,23,23....
// })

// console.log(movements);
// console.log(movementsUsd);

// //arrow
// const movementsUSD=movements.map(mov=>mov*eurToUsd);

// console.log(movements);
// console.log(movementsUSD);


//For-Of way

// const movementUSDfor = [];
// for(const mov of movements){
//     movementUSDfor.push(mov*eurToUsd);
// }
// console.log(movementUSDfor);


//FILTER METHOD

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposits = movements.filter(function(mov){
//     return mov>0;
// })
// console.log(movements);
// console.log(deposits);

// //for-of type

// const depositsFor=[];

// for(const mov of movements){
//     if(mov>0){
//         depositsFor.push(mov);
//     }
// }
// console.log(depositsFor);


//Reduce Method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const balance = movements.reduce(function(acc, cur, i, arr){
//     console.log(`Iteration ${i}:${acc}`);
//     return acc+cur;
// },0);

// console.log(balance);

// //for-of
// let balance2 = 0;
// for(const mov of movements){
//     balance2+=mov;
// }
// console.log(balance2);

//maximum value example of reduce
// const max = movements.reduce((acc,mov)=>{
//     if(acc>mov){
//         return acc;
//     }else{
//         return mov;
//     }
// },movements[0]);

// console.log(max);



//chaining method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const euroToUsd = 1.1;

//PIPELINE
// const totalDepositsUSD = movements
//                         .filter(mov=>mov>0)
//                         .map(mov=>mov*euroToUsd)
//                         .reduce((acc,mov)=>acc+mov,0);

//for negative and all
// const totalDepositsUSD = movements
//                         .filter(mov=>mov>0)
//                         .map((mov,i,arr)=>{
//                             // console.log(arr);
//                             return mov*euroToUsd;
//                         })
//                         .reduce((acc,mov)=>acc+mov,0);

// console.log(totalDepositsUSD);



//FIND Method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdrawal = movements.find(mov=>mov<0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc=>acc.owner==='Jessica Davis')
// console.log(account);




//SOME AND EVERY METHOD

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements);
// console.log(movements.includes(-130));  //test for equality

// //what if we wanted to check for some condition and that is when some method comes
// //into play

// //Some Method

// const anyDeposits = movements.some(mov=>mov>0);
// console.log(anyDeposits);   //true


// //EVERY- only return true if all the element in array satisfy the condition that we pass in

// console.log(movements.every(mov=>mov>0));
// console.log(account4.movements.every(mov=>mov>0));

// //sepearte callback

// const deposit = mov=>mov>0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));



//Flat and FlatMap

// const arr = [[1,2,3],[4,5,6],7,8];

// //removes the nested array and flatten the array
// console.log(arr.flat());    

// const arrDeep = [[[1,2],3],[4,[5,6]],7,8];
// console.log(arrDeep.flat());
// console.log(arrDeep.flat(2));//1 is default. for the level of deepening

// const accountMovement = accounts.map(acc=>acc.movements);
// console.log(accountMovement);

// const allMovements = accountMovement.flat();
// console.log(allMovements);

// //flat
// const overallBalance = accounts
//                         .map(acc=>acc.movements)
//                         .flat()
//                         .reduce((acc,mov)=>acc+mov,0);
// console.log(overallBalance);

// //map first and flating the result is common to solve this we have flatMap
// //FlatMap method

// //flatMap
// const overallBalance2 = accounts
//                         .flatMap(acc=>acc.movements)
//                         .reduce((acc,mov)=>acc+mov,0);
// console.log(overallBalance2);




//SORTING

//// Strings
// const owners = ['Jonas','Zach','Adam','Martha'];
// console.log(owners);
// console.log(owners.sort()); //mutate the array(changes the array)
// console.log(owners)

// / Numbers
// console.log(movements);
// // return < 0, A, B (keep order)
// // return > 0, B, A (switch order)
// // Ascending
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (a < b) return -1;
// // });
// movements.sort((a, b) => a - b);
// console.log(movements);
// // Descending
// // movements.sort((a, b) => {
// //   if (a > b) return -1;
// //   if (a < b) return 1;
// // });
// movements.sort((a, b) => b - a);
// console.log(movements);



//Creating and Filling Array Programatically

// const arr = [1,2,3,4,5,6,7];
// console.log(new Array(1,2,3,4,5,6,7));

// //Empty array + fill method
// const x = new Array(7);
// console.log(x);

// //x.fill(1);  //fill the array with same value and mutate the array
// //console.log(x);

// x.fill(1,3,5);
// console.log(x);

// arr.fill(23,2,6);
// console.log(arr);

// //Array FROM Method

// const y = Array.from({length:7},()=>1);
// console.log(y);

// const z = Array.from({length:7},(curr,i)=>i+1);//1,2,3,4,5,6,7
// console.log(z);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);
//   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
// });