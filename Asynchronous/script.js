'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data, className = ''){
    const html = `
            <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
            </div>
            </article>
        `;

        countriesContainer.insertAdjacentHTML('beforeend',html);
        // countriesContainer.style.opacity=1;
}

const renderError = function(msg){
    countriesContainer.insertAdjacentText('beforeend',msg);
    countriesContainer.style.opacity=1;
}

///////////////////////////////////////

///////////////////////////
//Common for all country
// const getCountryData = function(country){
//     const request = new XMLHttpRequest();
//     request.open('GET',`https://restcountries.eu/rest/v2/name/${country}`);
//     request.send();
//     // console.log(request.responseText);

//     request.addEventListener('load',function(){
//         // console.log(this.responseText);

//         // const [data] = JSON.parse(this.responseText);
//         // const data = JSON.parse(this.responseText)[0];
//         const [data] = JSON.parse(this.responseText);
//         //console.log(data);

//         const html = `
//             <article class="country">
//             <img class="country__img" src="${data.flag}" />
//             <div class="country__data">
//                 <h3 class="country__name">${data.name}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}</p>
//                 <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//                 <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//             </div>
//             </article>
//         `;

//         countriesContainer.insertAdjacentHTML('beforeend',html);
//         countriesContainer.style.opacity=1;
//     });
// };

// getCountryData('Portugal');
// getCountryData('usa');
// getCountryData('germany');



////////////////////////////////////////////
//For single country

// const request = new XMLHttpRequest();
// request.open('GET','https://restcountries.eu/rest/v2/name/portugal');
// request.send();
// // console.log(request.responseText);

// request.addEventListener('load',function(){
//     // console.log(this.responseText);

//     // const [data] = JSON.parse(this.responseText);
//     // const data = JSON.parse(this.responseText)[0];
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//         <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//           </div>
//         </article>
//     `;

//     countriesContainer.insertAdjacentHTML('beforeend',html);
//     countriesContainer.style.opacity=1;
// })


/////////////////////////////////////////////////////////////
//Callback Hell

// const renderCountry = function(data, className = ''){
//     const html = `
//             <article class="country ${className}">
//             <img class="country__img" src="${data.flag}" />
//             <div class="country__data">
//                 <h3 class="country__name">${data.name}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}</p>
//                 <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//                 <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//             </div>
//             </article>
//         `;

//         countriesContainer.insertAdjacentHTML('beforeend',html);
//         countriesContainer.style.opacity=1;
// }

// const getCountryAndNeighbour = function(country){
    
//     //Ajax call country 1
//     const request = new XMLHttpRequest();
//     request.open('GET',`https://restcountries.eu/rest/v2/name/${country}`);
//     request.send();

//     request.addEventListener('load',function(){
//         const [data] = JSON.parse(this.responseText);

//         //Render Country 1
//         renderCountry(data);

//         //Get neigbour country(2)
//         const [neigbour] = data.borders;    //takes only first element

//         if(!neigbour) return;

//         //Ajax call country 2
//         const request2 = new XMLHttpRequest();
//         request2.open('GET',`https://restcountries.eu/rest/v2/alpha/${neigbour}`);
//         request2.send();

//         request2.addEventListener('load', function(){
//             const data2 = JSON.parse(this.responseText);
//             // console.log(data2);

//             renderCountry(data2, 'neighbour');
//         })
//     });
// };

// getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);



////////////////////////////////////////////////////////
//Promises and the Fetch API

// const request = new XMLHttpRequest();
// request.open('GET','https://restcountries.eu/rest/v2/name/portugal');
// request.send();


// const request = fetch('https://restcountries.eu/rest/v2/name/portugal');
// console.log(request);

// const getCountryData = function(country){
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(function(response){
//         console.log(response);
//         return response.json();
//     }).then(function(data){
//         console.log(data);
//         renderCountry(data[0]);
//     })
// }


// const getCountryData = function(country){
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then((response)=>response.json(), err => alert(err))
//     .then(data=>{
//         renderCountry(data[0]);
//         const neighbour = data[0].borders[0];

//         if(!neighbour) return;

//         //country 2
//         return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);

//     })
//     .then(response=>response.json(), err => alert(err))
//     .then(data=>renderCountry(data,'neighbour'));
// };

// const getJSON = function(url, errorMsg = 'Something went wrong'){
//     return fetch(url).then(response=>{
//         if(!response.ok) throw new Error(`${errorMsg} (${response.status})`);
        
//         return response.json();
//     });
// };

// const getCountryData = function(country){
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then((response)=>{

//         if(!response.ok)
//             throw new Error(`Country not found (${response.status})`)

//         response.json()
//     })
//     .then(data=>{
//         renderCountry(data[0]);
//         const neighbour = data[0].borders[0];

//         if(!neighbour) return;

//         //country 2
//         return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);

//     })
//     .then(response=>response.json())
//     .then(data=>renderCountry(data,'neighbour'))
//     .catch(err=>{
//         console.error(`${err} 💥💥💥`);
//         renderError(`Something went wrong 💥💥 ${err.message}. Try Again`);
//     })
//     .finally(()=>{
//         countriesContainer.style.opacity=1;
//     })
// };

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(
//     `https://restcountries.eu/rest/v2/name/${country}`,
//     'Country not found'
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) throw new Error('No neighbour found!');
//       // Country 2
//       return getJSON(
//         `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click',function(){
//     getCountryData('portugal');
// })


///////////////////////////////////////
// The Event Loop in Practice

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });
// console.log('Test end');



///////////////////////////////////////
// Building a Simple Promise


//created promise
// const lotteryPromise = new Promise(function(resolve, reject){

//     console.log('Lottery draw is happening');

//     setTimeout(function(){
//         if(Math.random()>=0.5){
//             resolve('You Win');
//         }else{
//             reject(new Error('You lost'));
//         }
//     })
// })


//consuming promise

// lotteryPromise.then(res=>console.log(res)).catch(err=>console.error(err));

//promisifying setTimeout

// const wait = function(seconds){
//     return new Promise(function(resolve){
//         setTimeout(resolve, seconds*1000);
//     });
// };

// wait(2).then(()=>{
//     console.log('I waited for 2 seconds');
//     return wait(1);
// }).then(()=>{
//     console.log('I waited for 1 seconds');
// })

// Promise.resolve('abc').then(x=>console.log(x));
// Promise.reject(new Error('Problem!')).catch(x=>console.error(x));




///////////////////////////////////////
// Consuming Promises with Async/Await
// Error Handling With try...catch


// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// // fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res => console.log(res))
// const whereAmI = async function () {
//   try {
//     // Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;
//     // Reverse geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error('Problem getting location data');
//     const dataGeo = await resGeo.json();
//     console.log(dataGeo);
//     // Country data
//     const res = await fetch(
//       `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
//     );
    
//     // BUG in video:
//     // if (!resGeo.ok) throw new Error('Problem getting country');
    
//     // FIX:
//     if (!res.ok) throw new Error('Problem getting country');
//     const data = await res.json();
//     console.log(data);
//     renderCountry(data[0]);
//   } catch (err) {
//     console.error(`${err} 💥`);
//     renderError(`💥 ${err.message}`);
//   }
// };
// whereAmI();
// whereAmI();
// whereAmI();
// console.log('FIRST');
// // try {
// //   let y = 1;
// //   const x = 2;
// //   y = 3;
// // } catch (err) {
// //   alert(err.message);
// // }


///////////////////////////////////////
// Returning Values from Async Functions


// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// const whereAmI = async function () {
//   try {
//     // Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;
//     // Reverse geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error('Problem getting location data');
//     const dataGeo = await resGeo.json();
//     // Country data
//     const res = await fetch(
//       `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
//     );
//     if (!resGeo.ok) throw new Error('Problem getting country');
//     const data = await res.json();
//     renderCountry(data[0]);
//     return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (err) {
//     console.error(`${err} 💥`);
//     renderError(`💥 ${err.message}`);
//     // Reject promise returned from async function
//     throw err;
//   }
// };
// console.log('1: Will get location');
// // const city = whereAmI();
// // console.log(city);
// // whereAmI()
// //   .then(city => console.log(`2: ${city}`))
// //   .catch(err => console.error(`2: ${err.message} 💥`))
// //   .finally(() => console.log('3: Finished getting location'));
// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message} 💥`);
//   }
//   console.log('3: Finished getting location');
// })();



///////////////////////////////////////
// Running Promises in Parallel

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(
//     //   `https://restcountries.eu/rest/v2/name/${c1}`
//     // );
//     // const [data2] = await getJSON(
//     //   `https://restcountries.eu/rest/v2/name/${c2}`
//     // );
//     // const [data3] = await getJSON(
//     //   `https://restcountries.eu/rest/v2/name/${c3}`
//     // );
//     // console.log([data1.capital, data2.capital, data3.capital]);
//     const data = await Promise.all([
//       getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
//       getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
//       getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
//     ]);
//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };
// get3Countries('portugal', 'canada', 'tanzania');

///////////////////////////////////////
// Other Promise Combinators: race, allSettled and any
// Promise.race

// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.eu/rest/v2/name/italy`),
//     getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
//     getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
//   ]);
//   console.log(res[0]);
// })();
// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took too long!'));
//     }, sec * 1000);
//   });
// };
// Promise.race([
//   getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
//   timeout(5),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));
// // Promise.allSettled
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ]).then(res => console.log(res));
// Promise.all([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
// // Promise.any [ES2021]
// Promise.any([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
